const express = require("express");
const routes = require("./routes/routes");
const db = require('./config/Server_config');
const cors = require('cors');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');

const pdfTemplate = require('./documents')
//--------------------------------------------

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors());
server.use(express.json());
server.use(routes);



//POST - PDF
server.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile(__dirname+'/result.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

//GET - PDF
server.get('/fetch-pdf', (req, res) => {
    res.sendFile(__dirname+"/result.pdf")
});




db.authenticate().then(Db => {
    console.log('Banco de Dados conectado');
    server.listen(3333);

}).catch(err => {
    console.log('O erro foi: ' + err)

});


