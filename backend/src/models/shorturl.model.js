import mongoose, { Schema } from "mongoose";

const shortUrlSchema = new Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      index: true,
      unique: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const ShortURL = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortURL;
