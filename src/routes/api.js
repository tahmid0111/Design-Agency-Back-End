const express=require('express');
const router=express.Router()

const { AllTeamMembers, MemberByID, AllServices, ServiceByID, AllProjects, ProjectByID, AllReviews, HeroController, AllWorks, AllFeatures } = require('../controllers/allController');

router.get('/allmembers', AllTeamMembers)
router.get('/singlemember/:id', MemberByID)
router.get('/allservices', AllServices)
router.get('/singleservice/:id', ServiceByID)
router.get('/allprojects', AllProjects)
router.get('/singleproject/:id', ProjectByID)
router.get('/allreviews', AllReviews)
router.get('/hero', HeroController)
// router.get('/allpartners', AllPartners) 
router.get('/allworks', AllWorks)
router.get('/allfeatures', AllFeatures)

module.exports=router;