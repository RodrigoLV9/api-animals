const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const dataEN = require('./data/dataEN.json');
const dataES = require('./data/dataES.json');
const langMiddleware = require('./middlewares/language.js');
const animalsRouter = require('./routers/generalAnimals.js');
const vertebratesRouter=require('./routers/vertebrates')
const invertebratesRouter=require('./routers/invertebrates')
server.use(cors());
server.use(langMiddleware);
server.get('/',(req,res)=>{
    res.status(200).send('<h1>Welcome to the Animals API</h1>')
})
server.use('/animals',animalsRouter)
server.use('/animals/vertebrates',vertebratesRouter)
server.use('/animals/invertebrates',invertebratesRouter)
server.use((req, res) => {
    res.status(404).send('<h1>Error 404 (Not Found)</h1>');
});
// Middleware para manejar errores
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});