const express=require('express');
const router=express.Router()

const { AllTeamMembers, AllServices, AllProjects, AllReviews, HeroController, AllWorks, AllFeatures, RegisterUser, SingleMember, SingleService, SingleProject } = require('../controllers/allController');

router.get('/allmembers', AllTeamMembers)
router.get('/singlemember/:id', SingleMember)
router.get('/allservices', AllServices)
router.get('/singleservice/:id', SingleService)
router.get('/allprojects', AllProjects)
router.get('/singleproject/:id', SingleProject)
router.get('/allreviews', AllReviews)
router.get('/hero', HeroController)
// router.get('/allpartners', AllPartners) 
router.get('/allworks', AllWorks)
router.get('/allfeatures', AllFeatures)
// all user related apis are here
router.post('/register', RegisterUser)

module.exports=router;