import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { nanoid } from "nanoid";
import { connectDB } from "./src/config/db.js";
connectDB()
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/create", function (req, res) {
  let { url } = req.body;
  let myurl = "bit.ly";
  let newURL = `${myurl}/${nanoid(7)}`;
  //   res.send(nanoid(7));
  res.send(newURL);
});

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
