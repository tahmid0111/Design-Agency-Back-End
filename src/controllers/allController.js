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
  SingleMemberService,
  SingleServiceService,
  AllServiceService,
  SingleProjectService,
  SingleHeroService,
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
  let result = await SingleMemberService(req);
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.AllServices = async (req, res) => {
  let result = await AllServiceService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.SingleService = async (req, res) => {
  let result = await SingleServiceService(req);
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.AllProjects = async (req, res) => {
  let result = await AllProjectService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.SingleProject = async (req, res) => {
  let result = await SingleProjectService(req);
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.AllReviews = async (req, res) => {
  let result = await AllReviewService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.HeroController = async (req, res) => {
  let result = await SingleHeroService(req);
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.AllWorks = async (req, res) => {
  let result = await AllWorkService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
  } else {
    res.status(404).json({ status: "fail" });
  }
};

exports.AllFeatures = async (req, res) => {
  let result = await AllFeatureService();
  if (result.status === "success") {
    res.status(200).json({ status: "success", data: result.data });
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
