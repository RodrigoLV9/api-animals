const express=require('express')
const { getVertebrates, getVertebratesIDGeneral } = require('../controllers/animals')
const vertebratesRouter=express.Router()
vertebratesRouter.use(express.json())
vertebratesRouter.get('/',getVertebrates)
vertebratesRouter.get('/:idGeneral',getVertebratesIDGeneral)
module.exports=vertebratesRouter