const express=require('express');
const router=express.Router()

const { AllTeamMembers, MemberByID, AllServices, ServiceByID } = require('../controllers/allController');

router.get('/allmembers', AllTeamMembers)
router.get('/singlemember/:id', MemberByID)
router.get('/allservices', AllServices)
router.get('/singleservice/:id', ServiceByID)

module.exports=router;