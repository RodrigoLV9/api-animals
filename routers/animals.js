const express=require('express')
const animalsRouter=express.Router()
const data1=require('../data/data1.json')
animalsRouter.use(express.json())
function quitarTildes(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
animalsRouter.get('/:class',(req,res)=>{
    const clase=req.params.class
    const animalClass=data1.vertebrados.find((item)=>{
         const newItem=quitarTildes(item.clase.toLowerCase())
         return newItem==clase.toLowerCase()
        })
    if (animalClass) {
        res.send(animalClass);
    } else {
        res.status(404).send({ error: 'Class not found' });
    }
})
animalsRouter.use((req,res)=>{
    res.status(404).send('<h1>Error 404 (Not Found)</h1>')
})
module.exports=animalsRouter