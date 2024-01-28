const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    ImageOne: {
      type: String,
      required: true,
      trim: true,
    },
    ImageTwo: {
      type: String,
      required: true,
      trim: true,
    },
    ImageThree: {
      type: String,
      required: true,
      trim: true,
    },
    ImageFour: {
      type: String,
      required: true,
      trim: true,
    },
    SubTitle: {
      type: String,
      required: true,
    },
    Desc: {
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

const serviceModel = mongoose.model("services", DataSchema);

module.exports = serviceModel;
