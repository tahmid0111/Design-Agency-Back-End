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
    Desc: {
      type: String,
      required: true,
    },
    Duration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const projectModel = mongoose.model("projects", DataSchema);

module.exports = projectModel;
