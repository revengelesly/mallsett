const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const AdminContentsOptionSchema = new Schema({
    
    creditCards: [{
        //personal
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        category: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        available: {
             type: Boolean,
            required: true,
            default: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
    }],
     posSystems: [{
        //personal
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        category: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        available: {
             type: Boolean,
            required: true,
            default: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
    }],
     businessType: [{
        //personal
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        category: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        available: {
             type: Boolean,
            required: true,
            default: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
    }],
    businessRecomendation: [{
        //personal
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        category: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        available: {
             type: Boolean,
            required: true,
            default: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
    }],
            
});

module.exports = AdminContentsOption = mongoose.model('locations', AdminContentsOptionSchema);