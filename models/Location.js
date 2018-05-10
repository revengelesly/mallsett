const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const LocationSchema = new Schema({

    googlePlaceId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    apartment: {
        type: String,
        default: "Not an Apartment or Suite"
    },
    // phone for that particular location
    phone: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: "This address is visible, is not behind another building, does not require special codes, and delivery services should have no problem finding it."
    },
    // this will go to address categories
    categories: {
        type: [String],
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
            
});

module.exports = MerchantLocation = mongoose.model('locations', LocationSchema);