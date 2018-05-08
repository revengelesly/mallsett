const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const MessageSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    subject: {
        type: [String]
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'
    },
    merchants: [{
        type: Schema.Types.ObjectId,
        ref: 'merchants'
    }],
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'products'
    }],
    text: {
        type: String,
        required: true  
    },
    updated_at: {
      type: Date
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    status: {
        type: [String]
    },
    comments: [
        {
            profile: {
                type: Schema.Types.ObjectId,
                ref: 'profile'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            created_at: {
                type: Date,
                default: Date.now
            },
            updated_at: {
                type: Date                
            },
        }
    ]
});

module.exports = Message = mongoose.model('messages', MessageSchema);