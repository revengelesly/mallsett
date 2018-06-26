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
    }],
    merchantsSuggestionsRadius: [{
        // is it child, parent, pos system, etc.
        typeCategory: {
            type: String,
            required: true
        },
        // the main business google category
        googleCategory: {
            type: String,
            required: true
        },
        // how far to look for the suggested category
        radiusDistance: {
            type: String,
            required: true,
            default: 10
        },
        // categories that we are suggesting.
        suggestedCategories: [{
           name: String,
           // do we automaticly add the nearest on the category.
           // For Example: we can automatilcy add the nearest Police Station or Fire Department.
           autoFirst: {
               type: Boolean,
               default: false
           }
        }]
    }],
    merchantsSuggestionsDirect: [{
        // is it child, parent, pos system, etc.
        typeCategory: {
            type: String,
            required: true
        },
        // the main business google category
        googleCategory: {
            type: String,
            required: true
        },
        // categories that we are suggesting.
        googlePlaceId: [{
            type: String
        }]
    }],

});

module.exports = Contents = mongoose.model('contents', AdminContentsSchema);
