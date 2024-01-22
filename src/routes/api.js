const express=require('express');
const router=express.Router()

const { AllTeamMembers, MemberByID } = require('../controllers/allController');

router.get('/allmembers', AllTeamMembers)
router.get('/singlemember/:id', MemberByID)

module.exports=router;