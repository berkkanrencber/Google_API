const express = require('express');
const bodyParser = require('body-parser');
const ResponseNearbySearchModel = require('./models/responseNearbySearchModel');
const ResponseDetailModel = require('./models/responseDetailModel');
const ResponseAutocompleteModel = require('./models/responseAutocompleteModel');
const ResponseGeocodeModel = require('./models/responseGeocodeModel');
const { sendRequest } = require('./modules/requestModule');
const { checkProperty } = require('./modules/filter');
const path = require('path');
const { send } = require('process');
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
                rating:data.results[i].rating ? data.results[i].rating : 0,
                user_ratings_total:data.results[i].user_ratings_total ? data.results[i].user_ratings_total : 0,
                location: data.results[i].geometry.location 
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
    var place_id = req.query.place_id;
    var type = req.query.type;
    var radius = req.query.radius;
    var rating = req.query.rating;
    var user_ratings_total= req.query.user_ratings_total;
    var responseData = new ResponseNearbySearchModel({results:[]});
    var url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&language=tr&reviews_no_translations =false&key=${process.env.API_KEY}`
    
    sendRequest(url, 'GET')
    .then(async (data) => {
        var lat = data.result.geometry.location.lat
        var lng = data.result.geometry.location.lng
        responseData.results = await getAllPlaces(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=${radius}&type=${type}&key=${process.env.API_KEY}`);
        responseData.results = checkProperty(responseData.results, rating, user_ratings_total);
        res.json(responseData);
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    })

    
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
        responseData.rating = data.result.rating ? data.result.rating : 0;
        responseData.user_ratings_total = data.result.user_ratings_total ? data.result.user_ratings_total : 0;
        responseData.types = data.result.types;
        responseData.international_phone_number = data.result.international_phone_number ? data.result.international_phone_number : ["Telefon numarası bilgisi bulunamadı."]
        responseData.url = data.result.url;
        responseData.reviews = data.result.reviews ? data.result.reviews : []; //review format => [{author_name, author_url, language, original_language, profile_photo_url, rating, relative_time_description, text, time, translated}]
        responseData.weekday_text = data.result.opening_hours === undefined ? ["Saat bilgisi bulunamadı."] : data.result.opening_hours.weekday_text ;
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

app.get('/get/place',(req,res) => {
    var latlng = `${req.query.lat},${req.query.lng}`
    var responseData = new ResponseGeocodeModel;
    var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${process.env.API_KEY}`
    sendRequest(url, 'GET')
    .then(data => {
        responseData.result.place_id = data.results[0].place_id;
        responseData.result.formatted_address = data.results[0].formatted_address;
        res.json(responseData);
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    })
})

app.listen(PORT,() => {
    console.log(`${PORT} listening`);
});