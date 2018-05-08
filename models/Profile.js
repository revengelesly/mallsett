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
        phone: {
            type: String
        },
        handle: {
            type: String,
            required: true,
            max: 40
        },
        dob: {
            type: Date,
            required: false
        },
        status: {
            type: String,
            required: true
        },
        skills: {
            type: [String]
        },
        pitch: {
            type: String,
            required: false
        },
        bio: {
            type: String,
            required: false
        },
        location: [
            {
                name: {
                    type: String,
                    required: true
                },
                address: {
                    type: String,
                    required: true
                },
                // phone for that particular location
                phone: {
                    type: String,
                    required: true
                },
                googlePlaceId: {
                    type: String
                },
                apartment: {
                    type: String,
                    default: "Not an Apartment or Suite"
                },
                categories: {
                    type: [String],
                    required: true
                },
                created_at: {
                    type: Date,
                    default: Date.now
                },
                updated_at: {
                    type: Date
                },
                notes: {
                    type: String,
                    default: "This address is visible, is not behind another building, does not require special codes, and delivery services should have no problem finding it."
                }
            }
        ],
        files: [
            {
                categories: {
                   type: String,
                   required: true
                },
                subject: {
                    type: [String]
                },
                displayName: {
                    type: String,
                    required: true
                },
                directory: {
                    type: String,
                    required: true
                },
                notes: {
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
            }
        ],
        socialMedia: [
            {
                channel: {
                    type: String,
                    required: true
                },
                link: {
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
            }
        ],
        
        
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