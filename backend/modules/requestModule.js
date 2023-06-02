const { json } = require("body-parser");
const { application } = require("express");

function sendRequest(url, method, data=null){
    return new Promise((resolve,reject) => {
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data === null ? JSON.stringify() : JSON.stringify(data),
        })
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(err => {
            reject(err);
        })
    })
}

module.exports= {
    sendRequest
}