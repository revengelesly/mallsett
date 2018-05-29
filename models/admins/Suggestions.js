const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const AdminContentsSchema = new Schema({
    
     merchantsSelectOptions: [{
        //personal
        creator: {
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
        availability: {
             type: Boolean,
            required: true,
            default: true
        },
        private: {
             type: Boolean,
            required: true,
            default: true
        },
        accountType: {
            type: String,
            required: true,
            default: "Product"
        },
        allowed: [{
             type: String        
            
        }],
        banned: [{
             type: String        
            
        }],
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
    }]
});

module.exports = AdminContentsOption = mongoose.model('contents', AdminContentsSchema);