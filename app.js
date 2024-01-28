// initial packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const router = require("./src/routes/api");

// using the packages
app.use(express.json());
app.use(cors());
// mongoDb connection
let url = process.env.URL;
mongoose.connect(url);
// routing implement
app.use("/api/v1", router);
// error routing implement
app.use("*", (req, res) => {
  res
    .status(404)
    .json({
      status: "fail",
      data: "something went wrong",
      message: "please check your net connection",
    });
});

module.exports = app;
