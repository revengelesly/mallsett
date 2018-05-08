const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const ProductSchema = new Schema({
    // Product Information
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'    
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'merchants'    
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'products'    
    },
    displayName: {
        type: String,
        required: true
    },
    pitch: String,
    availability: [String],
    noChanges: [String],
    updated_at: Date,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);