const heroModel = require("../models/heroModel");
const partnersModel = require("../models/partnerModel");
const projectModel = require("../models/projectModel");
const reviewModel = require("../models/reviewModel");
const serviceModel = require("../models/serviceModel");
const teamModel = require("../models/teamModel");
const workModel = require("../models/workModel");

exports.AllTeamMembers = async (req, res) => {
  try {
    const result = await teamModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.MemberByID = async (req, res) => {
    let id= req.params.id;
    let Query = {_id: id}
  try {
    const result = await teamModel.findOne(Query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.AllServices = async (req, res) => {
  try {
    const result = await serviceModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.ServiceByID = async (req, res) => {
  let id= req.params.id;
  let Query = {_id: id}
  try {
    const result = await serviceModel.findOne(Query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.AllProjects = async (req, res) => {
  try {
    const result = await projectModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.ProjectByID = async (req, res) => {
  let id= req.params.id;
  let Query = {_id: id}
  try {
    const result = await projectModel.findOne(Query);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.AllReviews = async (req, res) => {
  try {
    const result = await reviewModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.HeroController = async (req, res) => {
  try {
    const result = await heroModel.findOne();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

// exports.AllPartners = async (req, res) => {
//   try {
//     const result = await partnersModel.find();
//     res.status(200).json({ status: "success", data: result });
//   } catch (error) {
//     res.status(404).json({ status: "fail", data: "something went wrong" });
//   }
// }

exports.AllWorks = async (req, res) => {
  try {
    const result = await workModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.AllFeatures = async (req, res) => {
  try {
    const result = await reviewModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}