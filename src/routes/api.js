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

router.get("/allmembers", AllTeamMembers);
router.get("/singlemember/:id", SingleMember);
router.get("/allservices", AllServices);
router.get("/singleservice/:id", SingleService);
router.get("/allprojects", AllProjects);
router.get("/singleproject/:id", SingleProject);
router.get("/allreviews", AllReviews);
router.get("/hero", HeroController);
router.get("/allworks", AllWorks);
router.get("/allfeatures", AllFeatures);
// all user related apis are here
router.post("/register", RegisterUser);
router.post("/login", LoginUser);

module.exports = router;
