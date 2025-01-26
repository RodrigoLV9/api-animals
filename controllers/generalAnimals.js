const dataEN=require('../data/dataEN.json')
const dataES=require('../data/dataES.json')
const handleParams = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};
const getAnimals=(req,res)=>{
    const lang = req.lang;
    const data = lang === 'es' ? dataES : dataEN;
    const { animal } = req.query;
    if (animal) {
        const animalString = handleParams(animal);
        const saveAnimal = data.vertebrates.flatMap((item) => {
            return item.examples.filter((e) => {
                return handleParams(e.common_name) === animalString;
            });
        });

        const saveAnimal2 = data.invertebrates.flatMap((item) => {
            return item.examples.filter((e) => {
                return handleParams(e.common_name) === animalString;
            });
        });

        const result = [...saveAnimal, ...saveAnimal2].filter((el) => el != null);
        if (result.length === 0) {
            return res.status(404).send('<h1>Error 404 (Not Found)</h1>');
        } else {
            return res.send(result);
        }
    }
    res.send(data);
}
const getClassAnimal=(req,res)=>{
    const lang=req.lang
    const data=lang==='es' ? dataES : dataEN
    const clase=req.params.class
    const classVertebrates=data.vertebrates.find((item)=>{
         const newItem=handleParams(item.class.toLowerCase())
         return newItem==clase.toLowerCase()
        })
    const classInvertebrates=data.invertebrates.find((item)=>{
        const newItem=handleParams(item.class.toLowerCase())
        return newItem==clase.toLowerCase()
    })
    const animalClass=[classVertebrates,classInvertebrates].filter((el)=>el!=null)
    if (animalClass) {
        res.send(animalClass);
    } else {
        res.status(404).send({ error: 'Class not found' });
    }
}
module.exports={getAnimals, getClassAnimal}