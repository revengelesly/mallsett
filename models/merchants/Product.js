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
    // brands
    association: [{
        type: Schema.Types.ObjectId,
        ref: 'merchants'    
    }],
    displayName: {
        type: String,
        required: true
    },
    image: String,
    //todo: create a gallery section
    gallery: [String],
    pitch: String,
    
    categories: {
        type: [String],
        required: true
    },
    // group: ranges
    dateRange: [{
        type: [String],
        dateStart: Date,
        dateEnd: Date,
        productDate: {
            type: Schema.Types.ObjectId,
            ref: 'productDates'
        },
        //amount in minutes. ToDo: add prep time to products.
    
        published: Boolean,
        timeRange: [{
            timeStart: String,
            timeEnd: String,  
            productTime: {
                type: Schema.Types.ObjectId,
                ref: 'productTime'
            },
            published: Boolean,
            days: [String],
            prepTime: {
                type: Number,
                default: 120
            },
            ageRange: [{
                type: [String],
                start: {
                    type: Number,
                    default: 0
                },
                end: {
                    type: Number,
                    default: 200
                },
                productAge: {
                    type: Schema.Types.ObjectId,
                    ref: 'productAge'
                },
                classRange: [{
                    type: [String],
                    start: {
                        type: Number,
                        default: 0
                    },
                    end: {
                        type: Number,
                        default: 200
                    },
                    productClass: {
                        type: Schema.Types.ObjectId,
                        ref: 'productClass'
                    }
                }]
            }]
        }]
        
    }],
    
    //group: discounting
    discounting: {
            //wholesale, discont, voucher
            discountType: String,
            start: Number,
            end: Number,
            // amount purchased, dates from when to win, 
            valueType: String,
            //amount discounted
            discount: Number,
            // fixed or percentage
            discountType: String,
            expiration: Date,
            code: String,
            // is it available to everyone, restricted to only friends.
            availability: [String],
            published: Boolean,
            updated_at: Date,
            created_at: {
                type: Date,
                default: Date.now
            }
    },
    availability: [String],
    published: Boolean,
    noChanges: [String],
    updated_at: Date,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);