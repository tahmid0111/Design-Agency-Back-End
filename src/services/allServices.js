const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// all models are imported here
const teamModel = require("../models/teamModel");
const UserModel = require("../models/userModel");
const serviceModel = require("../models/serviceModel");
const projectModel = require("../models/projectModel");
const reviewModel = require("../models/reviewModel");
const heroModel = require("../models/heroModel");
const workModel = require("../models/workModel");
const featuredModel = require("../models/featuredModel");

exports.AllTeamMemberService = async () => {
  const aggregationPipeline = [{ $match: {} }];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.SingleMemberService = async (req) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const aggregationPipeline = [{ $match: { _id: id } }];
  try {
    const result = await teamModel.aggregate(aggregationPipeline).limit(1);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.AllServiceService = async () => {
  const aggregationPipeline = [{ $match: {} }];
  try {
    let result = await serviceModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.SingleServiceService = async (req) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const aggregationPipeline = [{ $match: { _id: id } }];
  try {
    const result = await serviceModel.aggregate(aggregationPipeline).limit(1);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.AllProjectService = async () => {
  const aggregationPipeline = [{ $match: {} }];
  try {
    let result = await projectModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.SingleProjectService = async (req) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const aggregationPipeline = [{ $match: { _id: id } }];
  try {
    const result = await projectModel.aggregate(aggregationPipeline).limit(1);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.AllReviewService = async () => {
  const aggregationPipeline = [{ $match: {} }];
  try {
    let result = await reviewModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.SingleHeroService = async (req) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const aggregationPipeline = [{ $match: {} }];
  try {
    const result = await heroModel.aggregate(aggregationPipeline).limit(1);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.AllWorkService = async () => {
  const aggregationPipeline = [{ $match: {} }];
  try {
    let result = await workModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.AllFeatureService = async () => {
  const aggregationPipeline = [{ $match: {} }];
  try {
    let result = await featuredModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

// user related services are here
exports.RegisterUserService = async (req) => {
  try {
    let reqBody = req.body;
    let hashedPass = await bcrypt.hash(reqBody.Password, 10);
    let myBody = {
      ...reqBody,
      Password: hashedPass,
    };
    let result = await UserModel.create(myBody);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.LoginUserService = async (req) => {
  try {
    let reqBody = req.body;
    let aggregationPipeline = [{ $match: { Email: reqBody.Email } }];
    let user = await UserModel.aggregate(aggregationPipeline).limit(1);
    if (user) {
      let result = await bcrypt.compare(reqBody.Password, user[0].Password);
      if (result) {
        let Payload = {
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
          data: user,
        };

        let token = jwt.sign(Payload, "secretkey");

        return { status: "success", data: token };
      } else {
        return { status: "wrong" };
      }
    }
  } catch (error) {
    return { status: "fail" };
  }
};
