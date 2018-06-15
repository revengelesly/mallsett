const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const FileSchema = new Schema({
  
    displayName: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    categories: {
       type: String,
       required: true
    },
    directory: {
        type: String,
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

module.exports = MerchantFile = mongoose.model('files', FileSchema);