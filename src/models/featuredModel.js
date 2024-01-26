const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Image: {
      type: String,
      required: true,
      trim: true,
    },
    SubTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const featuredModel = mongoose.model("features", DataSchema);

module.exports = featuredModel;
