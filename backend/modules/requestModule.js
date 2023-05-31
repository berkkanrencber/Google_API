const { json } = require("body-parser");
const { application } = require("express");

async function sendRequest(data, url, ){

const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data),
})
const responseData = await response.json();
return responseData;
}

module.exports= {
    sendRequest
}