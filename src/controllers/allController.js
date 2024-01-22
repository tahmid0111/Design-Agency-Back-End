const teamModel = require("../models/teamModel");

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

exports.AllTeamMembers = async (req, res) => {
  try {
    const result = await teamModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.AllTeamMembers = async (req, res) => {
  try {
    const result = await teamModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

exports.AllTeamMembers = async (req, res) => {
  try {
    const result = await teamModel.find();
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res.status(404).json({ status: "fail", data: "something went wrong" });
  }
}

