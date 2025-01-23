const express=require('express');
const server=express();
require('dotenv').config()
const cors=require('cors')
const PORT = process.env.PORT || 5000;
const dataEN=require('./data/dataEN.json')
/* const dataES=require('./data/dataES.json') */
const animalsRouter=require('./routers/animals')
const handleParams=(str)=>{
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
server.use(cors())
server.get('/animals',(req,res)=>{
    const {animal}=req.query
    if(animal){
        const animalString=handleParams(animal)
        const saveAnimal=dataEN.vertebrates.map((item)=>{
            return item.examples.find((e)=>{
                return handleParams(e.common_name)==animalString
            })
        })
        const saveAnimal2=dataEN.invertebrates.map((item)=>{
            return item.examples.find((e)=>{
                return handleParams(e.common_name)==animalString
            })
        })
        const result=[...saveAnimal, ...saveAnimal2].filter((el) => el != null)
        
        if (result.length === 0) {
            console.log("hello")
            res.status(404).send('<h1>Error 404 (Not Found)</h1>');
        } else {
            res.send(result);
        }
    }else{
        res.send(dataEN)
    }
})
server.get('/animals/vertebrates',(req,res)=>{
    res.send(dataEN.vertebrates)
})
server.use('/animals/vertebrates/',animalsRouter)
server.get('/animals/invertebrates',(req,res)=>{
    res.send(dataEN.invertebrates)
})
server.use((req,res)=>{
    res.status(404).send('<h1>Error 404 (Not Found)</h1>')
})
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


