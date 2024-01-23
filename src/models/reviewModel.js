const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Image: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Project: {
      type: String,
      required: true,
    },
    Review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const reviewModel = mongoose.model("reviews", DataSchema);

module.exports = reviewModel;
