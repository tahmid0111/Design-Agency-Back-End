const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
    },
    SubTitle: {
      type: String,
      required: true,
    },
    ImageOne: {
      type: String,
      required: true,
    },
    ImageTwo: {
      type: String,
      required: true,
    },
    ImageThree: {
      type: String,
      required: true,
    },
    ImageFour: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const heroModel = mongoose.model("heros", DataSchema);

module.exports = heroModel;
