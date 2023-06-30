const express = require('express');
const bodyParser = require('body-parser');
const ResponseNearbySearchModel = require('./models/responseNearbySearchModel');
const ResponseDetailModel = require('./models/responseDetailModel');
const { sendRequest } = require('./modules/requestModule');
require('dotenv').config({path: '../.env'});
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

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
    //var results = [];
    
    responseData.results = await getAllPlaces(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=${radius}&type=${type}&key=${process.env.API_KEY}`);
    res.json(responseData);
    
})

app.listen(PORT,() => {
    console.log(`${PORT} listening`);
});