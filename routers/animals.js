const express=require('express')
const animalsRouter=express.Router()
const data1=require('../data/data1.json')
animalsRouter.use(express.json())
function quitarTildes(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
animalsRouter.get('/:clase',(req,res)=>{
    const clase=req.params.clase
    const animalClass=data1.vertebrados.find((item)=>{
         const newItem=quitarTildes(item.clase.toLowerCase())
         return newItem==clase.toLowerCase()
        })
    res.send(animalClass)
})

module.exports=animalsRouter