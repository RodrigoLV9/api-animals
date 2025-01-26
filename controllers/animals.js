const dataES=require('../data/dataES.json')
const dataEN=require('../data/dataEN.json')
const getVertebrates=(req,res)=>{
    const lang=req.lang
    const data=lang==='es' ? dataES : dataEN
    res.status(200).send(data.vertebrates)
}
const getInvertebrates=(req,res)=>{
    const lang=req.lang
    const data=lang==='es' ? dataES : dataEN
    res.status(200).send(data.invertebrates)
}
module.exports={getVertebrates,getInvertebrates}