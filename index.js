const express=require('express');
const server=express();
require('dotenv').config()
const cors=require('cors')
const PORT = process.env.PORT || 5000;
const data1=require('./data/data1.json')

server.use(cors())
server.get(('/'),(req,res)=>{
    res.send(data1)
})

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

