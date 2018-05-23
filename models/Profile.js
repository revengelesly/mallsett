const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const ProfileSchema = new Schema({
        //personal
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        email: {
            type: String
        },
        avatar: {
            type: String
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
        // default to self
        category: {
            type: [String],
            required: true,
            default: "self"
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
            required: false,
            max: 40
        },

        status: {
            type: String,
            required: true,
            default: 'restricted'
        },
        locations: [
            {
                address: {
                    type: String,
                    required: true
                },
                apartment: {
                    type: String,
                    default: "Not an Apartment or Suite"
                },
                categories: {
                    type: [String],
                    required: true
                },
                notes: {
                    type: String,
                    default: "This address is visible, is not behind another building, does not require special codes, and delivery services should have no problem finding it."
                },
                // this will go to address categories

                created_at: {
                    type: Date,
                    default: Date.now
                },
                updated_at: {
                    type: Date
                },
                owner: {
                    type: Schema.Types.ObjectId,
                },
            }
        ],
        files: [
            {
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
                owner: {
                    type: [Schema.Types.ObjectId]
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
