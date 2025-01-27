const dataES=require('../data/dataES.json')
const dataEN=require('../data/dataEN.json')
const getVertebrates=(req,res)=>{
    const lang=req.lang
    const data=lang==='es' ? dataES : dataEN
    res.status(200).send(data.vertebrates)
}
const getVertebratesIDGeneral = (req, res) => {
    const lang = req.lang;
    const data = lang === 'es' ? dataES : dataEN;
    const idGeneral = parseInt(req.params.idGeneral, 10);

    let animalID = null;
    for (const item_class of data.vertebrates) {
        const animal = item_class.examples.find((item) => {
            return item.general_id === idGeneral;
        });
        if (animal) {
            animalID = animal;
            break;
        }
    }
    if (animalID) {
        res.status(200).send(animalID);
    } else {
        res.status(404).send('Error 404 (Not found)');
    }
};
const getInvertebrates=(req,res)=>{
    const lang=req.lang
    const data=lang==='es' ? dataES : dataEN
    res.status(200).send(data.invertebrates)
}
const getInvertebratesIDGeneral = (req, res) => {
    const lang = req.lang;
    const data = lang === 'es' ? dataES : dataEN;
    const idGeneral = parseInt(req.params.idGeneral, 10);

    let animalID = null;
    for (const item_class of data.invertebrates) {
        const animal = item_class.examples.find((item) => {
            return item.general_id === idGeneral;
        });
        if (animal) {
            animalID = animal;
            break;
        }
    }
    if (animalID) {
        res.status(200).send(animalID);
    } else {
        res.status(404).send('Error 404 (Not found)');
    }
};
module.exports={getVertebrates, getVertebratesIDGeneral,getInvertebrates, getInvertebratesIDGeneral}