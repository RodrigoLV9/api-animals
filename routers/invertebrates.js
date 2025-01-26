const express =require('express')
const { getInvertebrates } = require('../controllers/animals')
const invertebratesRouter=express.Router()

invertebratesRouter.use(express.json())
invertebratesRouter.get('/',getInvertebrates)
module.exports=invertebratesRouter