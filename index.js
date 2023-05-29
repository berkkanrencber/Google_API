const { json } = require("body-parser");
const { application } = require("express");
const { write } = require("fs");
const requestModule = require('./backend/modules/requestModule.js');
require('dotenv').config();

const person = {
    isim: 'Hakan',
    soyisim: 'Uz'
}

async function writeData(){
    const data = await requestModule.sendRequest(person,'http://localhost:8080');
    console.log('Data in index.js: ' + JSON.stringify(data));
}

writeData();
