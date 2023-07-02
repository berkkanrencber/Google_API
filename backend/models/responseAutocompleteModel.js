const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseAutocompleteSchema = new Schema({
    predictions: [
        {
            place_id: String,
            description: String,
        }
    ]   
})

const ResponseAutocompleteModel = mongoose.model('ResponseAutocompleteModel',responseAutocompleteSchema);

module.exports = ResponseAutocompleteModel;