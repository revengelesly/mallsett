const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const MerchantSchema = new Schema({
        //personal
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'
        },
        category: {
            type: String
        },
        logo: {
            type: String
        },
        gallery: {
            type: [String]
        },
        // merchants, delivery services, government
        businessType: [{
            type: String,
            required: true
        }],
        targetType: [{
            type: String,
            required: true
        }],
        place: {
            googlePlaceId: {
                type: String
            },
            businessName: {
                type: String
            },
            address: {
                type: String
            },
            suite: {
                type: String
            },
            longitude: {
                type: String
            },
            lattitude: {
                type: String
            },
            phone: {
                type: String
            },
            photo: {
                type: String
            },
            googlePlaceCategories: {
                type: [String]
            },
            notes: {
                type: String
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
        },
        phone: {
            type: String
        },
        personalEmail: {
            type: String
        },
        businessEmail: {
            type: String
        },
        handle: {
            type: String,
            required: true,
            max: 40
        },
        detail: {
            pitch: {
                type: String,
                required: false
            },
            bio: {
                type: String,
                required: false
            },
            terms: {
                type: String,
                required: false
            },
            privacy: {
                type: String,
                required: false
            },
            faq: [
                {
                    question: String,
                    answer: String
                }
            ],
        },
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
                },
                link: {
                    type: String,
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
                },
                displayName: {

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
        associates: [
            {
                connectedStatus: {
                    type: String
                },
                category: {
                    type: String,
                },
                merchantId: {
                    type: String
                }
            }
        ],
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date
        },
        // verification
        owners: [
            {
                profile: {
                    type: Schema.Types.ObjectId,
                    ref: 'profiles'
                },
                code: String,
                created_at: {
                    type: Date,
                    default: Date.now
                },
                updated_at: {
                    type: Date
                }
            }
        ],

});

module.exports = Merchant = mongoose.model('merchants', MerchantSchema);
