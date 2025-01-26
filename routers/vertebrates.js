const express=require('express')
const { getVertebrates } = require('../controllers/animals')
const vertebratesRouter=express.Router()
vertebratesRouter.use(express.json())
vertebratesRouter.get('/',getVertebrates)
module.exports=vertebratesRouter