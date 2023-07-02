const express = require('express');
const bodyParser = require('body-parser');
const ResponseNearbySearchModel = require('./models/responseNearbySearchModel');
const ResponseDetailModel = require('./models/responseDetailModel');
const ResponseAutocompleteModel = require('./models/responseAutocompleteModel');
const { sendRequest } = require('./modules/requestModule');
const path = require('path');
require('dotenv').config({path: '../.env'});
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// CORS ayarları
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Tüm kaynaklardan gelen isteklere izin vermek için '*'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

async function getAllPlaces(baseUrl, results=[], pageToken=""){
    var url = baseUrl;
    var allResults = [];
    if(pageToken){
        url = baseUrl + `&pagetoken=${pageToken}`
    }
    await sendRequest(url,'GET')
    .then(data => {
        for (let i = 0; i < data.results.length; i++) {
            results.push({
                place_id:data.results[i].place_id,
                name:data.results[i].name,
                formatted_address:data.results[i].vicinity,
                rating:data.results[i].rating,
                user_ratings_total:data.results[i].user_ratings_total
            })
        }
        allResults = results;
        if(data.next_page_token){
            return new Promise(resolve => setTimeout(resolve, 2000))
            .then(async () => await getAllPlaces(baseUrl, allResults, data.next_page_token));
        }
        
    })
    .catch(err => {
        console.error(`Error: ${err}`);
        return;
    })
    return allResults;
}
app.get('/get/nearby_search', async (req,res) => {
    var lat = req.query.lat;
    var lng = req.query.lng;
    var type = req.query.type;
    var radius = req.query.radius;
    var rating = req.query.rating;
    var responseData = new ResponseNearbySearchModel({results:[]});
    
    responseData.results = await getAllPlaces(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=${radius}&type=${type}&key=${process.env.API_KEY}`);
    res.json(responseData);
    
})

app.get('/get/place_detail', (req,res) => {
    var place_id = req.query.place_id;
    var responseData = new ResponseDetailModel();
    var url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&language=tr&reviews_no_translations =false&key=${process.env.API_KEY}`
    sendRequest(url, 'GET')
    .then(data => {
        responseData.place_id = data.result.place_id;
        responseData.name = data.result.name;
        responseData.formatted_address = data.result.formatted_address;
        responseData.rating = data.result.rating;
        responseData.user_ratings_total = data.result.user_ratings_total;
        responseData.types = data.result.types;
        responseData.international_phone_number = data.result.international_phone_number;
        responseData.url = data.result.url;
        responseData.reviews = data.result.reviews; //review format => [{author_name, author_url, language, original_language, profile_photo_url, rating, relative_time_description, text, time, translated}]
        responseData.weekday_text = data.result.opening_hours.weekday_text;
        res.json(responseData);
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    })
})

app.get('/get/autocomplete', (req,res) => {
    var input = req.query.input;
    var responseData = new ResponseAutocompleteModel();
    var url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${process.env.API_KEY}`;

    sendRequest(url, 'GET')
    .then(data => {
        for(let i = 0; i < data.predictions.length; i++){
            responseData.predictions.push({
                place_id : data.predictions[i].place_id,
                description : data.predictions[i].description
            })
        }
        res.json(responseData)
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    })

})

app.listen(PORT,() => {
    console.log(`${PORT} listening`);
});