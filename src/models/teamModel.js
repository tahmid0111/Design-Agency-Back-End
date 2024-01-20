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
    Position: {
      type: String,
      required: true,
    },
    About: {
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

const teamModel = mongoose.model("members", DataSchema);

module.exports = teamModel;
