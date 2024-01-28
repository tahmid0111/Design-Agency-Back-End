const teamModel = require("../models/teamModel");
const UserModel = require("../models/userModel");

exports.AllTeamMemberService = async () => {
  const aggregationPipeline = [{ $match: {}}];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};


exports.AllTeamMemberService = async () => {
  const aggregationPipeline = [{ $match: {}}];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};


exports.AllServices = async () => {
  const aggregationPipeline = [{ $match: {}}];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.AllProjectService = async () => {
  const aggregationPipeline = [{ $match: {}}];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.AllReviewService = async () => {
  const aggregationPipeline = [{ $match: {}}];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.AllWorkService = async () => {
  const aggregationPipeline = [{ $match: {}}];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.AllFeatureService = async () => {
  const aggregationPipeline = [{ $match: {}}];
  try {
    let result = await teamModel.aggregate(aggregationPipeline);
    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};


// user related service is here
exports.RegisterUserService = async (req) => {
  try {
    let reqBody = req.body;
    let result = await UserModel.create(reqBody);
    return { status: "success", data: result.data };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};
