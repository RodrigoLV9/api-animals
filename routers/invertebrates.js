const express =require('express')
const { getInvertebrates, getInvertebratesIDGeneral } = require('../controllers/animals')
const invertebratesRouter=express.Router()

invertebratesRouter.use(express.json())
invertebratesRouter.get('/',getInvertebrates)
invertebratesRouter.get('/:idGeneral',getInvertebratesIDGeneral)
module.exports=invertebratesRouter