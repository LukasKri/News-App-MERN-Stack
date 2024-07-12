const mongoose = require("mongoose");

const searchValueSchema = new mongoose.Schema(
  {
    search_value: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SearchValue", searchValueSchema);
