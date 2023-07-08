const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseNearbySearchSchema = new Schema({
    results: [
        {
            place_id: String,
            name: String,
            formatted_address: String,
            rating: Number,
            user_ratings_total: Number,
            location: {
                lat: Number,
                lng: Number
            }
        }
    ]   
})

const ResponseNearbySearchModel = mongoose.model('ResponseNearbySearchModel',responseNearbySearchSchema);

module.exports = ResponseNearbySearchModel;