// class ResponseDetail{
//     constructor(place_id, name, formatted_address, rating, user_ratings_total, types, international_phone_number, url, reviews, weekday_text){
//         this.place_id = place_id;
//         this.name = name;
//         this.formatted_address = formatted_address;
//         this.rating = rating;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseDetailSchema = new Schema({
    place_id: String,
    name: String,
    formatted_address: String,
    rating: Number,
    user_ratings_total: Number,
    types: Array,
    international_phone_number: String,
    url: String,
    reviews: Array,
    weekday_text: Array
})

const ResponseDetailModel = mongoose.model('ResponseDetailModel',responseDetailSchema);

module.exports = ResponseDetailModel;