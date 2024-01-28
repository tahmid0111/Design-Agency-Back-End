const heroModel = require("../models/heroModel");
const projectModel = require("../models/projectModel");
const reviewModel = require("../models/reviewModel");
const serviceModel = require("../models/serviceModel");
const teamModel = require("../models/teamModel");
const workModel = require("../models/workModel");
const mongoose=require('mongoose')
const {
  RegisterUserService,
  AllTeamMemberService,
  AllServices,
  AllProjectService,
  AllReviewService,
  AllWorkService,
  AllFeatureService,
} = require("../services/allServices");

exports.AllTeamMembers = async (req, res) => {
  let result = await AllTeamMemberService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.SingleMember = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const aggregationPipeline = [{ $match: { _id: id } }];
  try {
    const result = await teamModel.aggregate(aggregationPipeline).limit(1);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};

exports.AllServices = async (req, res) => {
  let result = await AllServices();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.SingleService = async (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  try {
    const result = await serviceModel.findOne(Query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};

exports.AllProjects = async (req, res) => {
  let result = await AllProjectService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.SingleProject = async (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  try {
    const result = await projectModel.findOne(Query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};

exports.AllReviews = async (req, res) => {
  let result = await AllReviewService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.HeroController = async (req, res) => {
  try {
    const result = await heroModel.findOne();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
};

exports.AllWorks = async (req, res) => {
  let result = await AllWorkService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.AllFeatures = async (req, res) => {
  let result = await AllFeatureService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

// user related controller is here
exports.RegisterUser = async (req, res) => {
  let result = await RegisterUserService(req);
  if (result.status == "success") {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(404).json({ status: "fail" });
  }
};
