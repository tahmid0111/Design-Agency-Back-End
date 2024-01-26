const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
    },
    Image: {
      type: String,
      required: true,
    },
    SubTitle: {
      type: String,
      required: true,
    },
    Number: {
      type: String,
      required: true,
    },
    Expression: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const workModel = mongoose.model("works", DataSchema);

module.exports = workModel;
