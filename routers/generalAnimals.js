const express=require('express')
const animalsRouter=express.Router()
const { getClassAnimal, getAnimals } = require('../controllers/generalAnimals')
animalsRouter.use(express.json())
animalsRouter.get('/',getAnimals)
animalsRouter.get('/:class',getClassAnimal)
animalsRouter.use((req,res)=>{
    res.status(404).send('<h1>Error 404 (Not Found)</h1>')
})
module.exports=animalsRouter