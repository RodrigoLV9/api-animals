const express=require('express');
const server=express();
require('dotenv').config()
const cors=require('cors')
const PORT = process.env.PORT || 5000;
const data1=require('./data/data1.json')
const animalsRouter=require('./routers/animals')

server.use(cors())
server.get('/animals',(req,res)=>{
    res.send(data1)
})
server.get('/animals/vertebrates',(req,res)=>{
    res.send(data1.vertebrados)
})
server.use('/animals/vertebrates/',animalsRouter)
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

