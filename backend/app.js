import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { nanoid } from "nanoid";
import { connectDB } from "./src/config/db.js";
import ShortURL from "./src/models/shorturl.model.js";
connectDB();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  const shortUrl = nanoid(7);
  const newUrl = new ShortURL({
    fullUrl: url,
    shortUrl,
  });
  newUrl.save();
  res.send(shortUrl);
});

app.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;
  const url = await ShortURL.findOne({ shortUrl });
  if (url) {
    res.redirect(url.fullUrl);
  } else {
    res.status(404).send("Not Found!");
  }
});

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
