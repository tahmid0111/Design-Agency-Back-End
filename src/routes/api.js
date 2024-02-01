const express = require("express");
const router = express.Router();
// all controllers are imported here
const {
  AllTeamMembers,
  AllServices,
  AllProjects,
  AllReviews,
  HeroController,
  AllWorks,
  AllFeatures,
  RegisterUser,
  SingleMember,
  SingleService,
  SingleProject,
  LoginUser,
} = require("../controllers/allController");
const { AuthVerify } = require("../middleware/AuthVerifyMiddleware");

// all user related apis are here
router.post("/register", RegisterUser);
router.post("/login", LoginUser);
// all other apis are here
router.get("/allmembers", AllTeamMembers);
router.get("/singlemember/:id", AuthVerify, SingleMember);
router.get("/allservices", AllServices);
router.get("/singleservice/:id", AuthVerify, SingleService);
router.get("/allprojects", AllProjects);
router.get("/singleproject/:id", AuthVerify, SingleProject);
router.get("/allreviews", AllReviews);
router.get("/hero", HeroController);
router.get("/allworks", AllWorks);
router.get("/allfeatures", AllFeatures);

module.exports = router;
