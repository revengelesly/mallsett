const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const MerchantSchema = new Schema({
    // Product Information
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'    
    },
    owners: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'    
    },
    google_id: {
        type: String,
        required: true
    },
    google_place_id: {
        type: String,
        required: true
    },
    affiliates: [
        {
           google_id: {
            type: String,
            required: true
        },
            google_place_id: {
                type: String,
                required: true
        },
            category: {
                type: String,
                required: true
            },
           
        }
    ],
    attributes: [{
        category: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }],
    // availaible globally, locally, privately
    availability: {
        type: [String],
        default: ['locally']
    },
    noChanges: [String],
    updated_at: Date,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Merchant = mongoose.model('merchant', MerchantSchema);