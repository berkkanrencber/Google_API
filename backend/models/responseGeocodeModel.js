const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseGeocodeSchema = new Schema({
    result: {
        formatted_address: String,
        place_id: String
    }   
})

const ResponseGeocodeModel = mongoose.model('ResponseGeocodeModel',responseGeocodeSchema);

module.exports = ResponseGeocodeModel;