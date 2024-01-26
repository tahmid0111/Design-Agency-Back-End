const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    Image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const partnersModel = mongoose.model("partners", DataSchema);

module.exports = partnersModel;
