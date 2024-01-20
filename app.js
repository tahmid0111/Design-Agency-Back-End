// initial packages
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const userRouter=require('./src/routes/user.route')

// extra packages
const cors = require('cors')
require('dotenv').config()

// using the packages
app.use(express.json())
app.use(cors())

// mongoDb connection
let url = `mongodb+srv://designagency:designagency998877@cluster0.zrsbqyu.mongodb.net`

mongoose.connect(url)

// routing implement
app.use('api/v1/user', userRouter)

// error routing implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"something went wrong"})
})

module.exports = app;