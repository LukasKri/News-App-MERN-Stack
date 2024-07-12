const mongoose = require("mongoose");

const articleDataSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ArticleData", articleDataSchema);
