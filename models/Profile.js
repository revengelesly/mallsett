const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const ProfileSchema = new Schema({
        //personal
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'    
        },
        // is it main profile, dependent profile
        profileType: {
            type: String,
            required: true
        },
        // name that will be shown to merchants, delivery drivers
        displayName: {
            type: String
        },
        dob: {
            type: Date,
            required: false
        },
        category: {
            type: String,
            required: false
        },
        considerations: {
            type: [String]
        },
        bio: {
            type: String,
            required: false
        },
        phone: {
            type: String
        },
        handle: {
            type: String,
            required: true,
            max: 40
        },
        
        status: {
            type: String,
            required: true,
            default: 'restricted'
        },
        locations: {
            type: [Schema.Types.ObjectId],
            ref: 'locations'    
        },
        files: {
            type: [Schema.Types.ObjectId],
            ref: 'files'    
        },
        attribute: [
            {
                category: {
                    type: String,
                    required: true
                },
                item: {
                    type: String
                }
            }
        ],
        apis: [
            {
                category: {
                    type: String,
                    required: true
                }, 
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'users' 
                }, 
                access: {
                    type: [String],
                    required: true
                }
            }    
        ],
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        }
   
});

module.exports = MerchantProfile = mongoose.model('profiles', ProfileSchema);