// all services are imported here
const {
  RegisterUserService,
  AllTeamMemberService,
  AllProjectService,
  AllReviewService,
  AllWorkService,
  AllFeatureService,
  SingleMemberService,
  SingleServiceService,
  AllServiceService,
  SingleProjectService,
  SingleHeroService,
  LoginUserService,
} = require("../services/allServices");

exports.AllTeamMembers = async (req, res) => {
  let result = await AllTeamMemberService();
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data of team members are here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.SingleMember = async (req, res) => {
  let result = await SingleMemberService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your expected data of the team member is here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.AllServices = async (req, res) => {
  let result = await AllServiceService();
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data of services are here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.SingleService = async (req, res) => {
  let result = await SingleServiceService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your expected data of the service is here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.AllProjects = async (req, res) => {
  let result = await AllProjectService();
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data of projects are here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.SingleProject = async (req, res) => {
  let result = await SingleProjectService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your expected data of the project is here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.AllReviews = async (req, res) => {
  let result = await AllReviewService();
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data of reviews are here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.HeroController = async (req, res) => {
  let result = await SingleHeroService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data of the hero section is here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.AllWorks = async (req, res) => {
  let result = await AllWorkService();
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data of works are here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.AllFeatures = async (req, res) => {
  let result = await AllFeatureService();
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your requested data of features are here",
      data: result.data,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

// user related controllers are here
exports.RegisterUser = async (req, res) => {
  let result = await RegisterUserService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Your account is registered successfully",
      data: result,
    });
  } else {
    res.status(404).json({ status: "fail", message: "something went wrong" });
  }
};

exports.LoginUser = async (req, res) => {
  let result = await LoginUserService(req);
  if (result.status === "success") {
    res.status(200).json({
      status: "success",
      message: "Login successfull",
      data: result.data,
    });
  } else if (result.status === "wrong") {
    res.status(404).json({ status: "fail", message: "invalid Email or Password" });
  } else {
    res.status(404).json({ status: "fail", message: "invalid Email or Password" });
  }
};
