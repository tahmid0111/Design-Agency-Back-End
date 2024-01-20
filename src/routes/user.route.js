// initial packages
const express=require('express');
const router=express.Router()

// user controllers are here
const { CreateUser, LoginUser, ReadUser, UpdateUser, DeleteUser } = require('../controllers/userController');

router.post('/register', CreateUser)
router.post('/login', LoginUser)
router.get('/readprofile/:id', ReadUser)
router.post('/updateuser/:id', UpdateUser)
router.post('/deleteuser/:id', DeleteUser)


module.exports = router;