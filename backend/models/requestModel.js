const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    lat: Number,
    lng: Number,
    type: String,
    radius: Number,
    rating: Number
})

const RequestModel = mongoose.model('RequestModel',requestSchema);

module.exports = RequestModel;