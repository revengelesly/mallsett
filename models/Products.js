const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const ProductSchema = new Schema({
    displayedName: {
        type: String,
        required: true,
        max: 40
    },
    description: {
        type: String,
        required: true,
        max: 140
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'file',
    },
    pricing: [String],
    purchasing: [String],
    groups: [{
        type: String
    }],
    options: {
        files: [{
            type: Schema.Types.ObjectId,
            ref: 'file',
        }],
        size: [{
            type: Schema.Types.ObjectId,
            ref: 'size',
        }],
        dates: [{
            type: Schema.Types.ObjectId,
            ref: 'dateRange',
        }],
        ages: [{
            type: Schema.Types.ObjectId,
            ref: 'ageRange',
        }],
        times: [{
            type: Schema.Types.ObjectId,
            ref: 'timeRange',
        }],
        class: [{
            type: Schema.Types.ObjectId,
            ref: 'classRange',
        }]
    },
    approval: Boolean,
    overide: Boolean,
    navigate: Boolean,
    published: Boolean,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'    
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'merchants'    
    },
    updated_at: Date,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);