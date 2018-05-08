const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const ProductSchema = new Schema({
    // Product Information
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'    
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'merchants'    
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'products'    
    },
    displayName: {
        type: String,
        required: true
    },
    pitch: String,
    availability: [String],
    noChanges: [String],
    updated_at: Date,
    created_at: {
        type: Date,
        default: Date.now
    },
    // Schema Access
    access: [{
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        group: {
            type: Schema.Types.ObjectId,
            ref: 'products'    
        },
        staffs: [{
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        }],
        active: Boolean
    }],
    // Schema Categorization
    categorization: [{
        creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
        group: {
            type: Schema.Types.ObjectId,
            ref: 'products' 
        },
        categories: [String],
        subCategories: [String],
        subjects: [String],
        sections: [String],
        active: Boolean
    }],
    
    // Schema Description
    description:  [{
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        group: {
            type: Schema.Types.ObjectId,
            ref: 'products'    
        },
        text: {
            type: String,
            required: true
        },
        active: Boolean
    }],
    // Schema Legal
    leagal: [{
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        group: {
            type: Schema.Types.ObjectId,
            ref: 'products'    
        },
        text: String,
        category: String,
        active: Boolean
    }],
    // Schema Indendation
    indents: [{
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        group: {
            type: Schema.Types.ObjectId,
            ref: 'products'    
        },
        text: String,
        // by the name or description
        area: [String],
        // in front or at the end
        location: [String]
    }],
    
    // Schema Gallery
    gallery: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            directory: String,
            displayName: String,
            notes: String,
            current: Boolean,
            supporters: [
                {
                    profile: {
                        type: Schema.Types.ObjectId,
                        ref: 'profiles'
                    },
                    created_at: {
                        type: Date,
                        default: Date.now
                    },
                    updated_at: Date
                }
            ],
            comments: [
                {
                    profile: {
                        type: Schema.Types.ObjectId,
                        ref: 'profiles'
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
            ],
            created_at: {
                type: Date,
                default: Date.now
            },
            updated_at: Date
        }
    ],
    // schema files
    files: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            directory: String,
            displayName: String,
            notes: String,
            current: Boolean,
            supporters: [
                {
                    profile: {
                        type: Schema.Types.ObjectId,
                        ref: 'profiles'
                    },
                    created_at: {
                        type: Date,
                        default: Date.now
                    },
                    updated_at: Date
                }
            ],
            comments: [
                {
                    profiles: {
                        type: Schema.Types.ObjectId,
                        ref: 'profiles'
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
            ],
            created_at: Date.now,
            updated_at: Date
        }
    ],
    
    // Add ranges schema
    ranges: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            days: [String],
            date: [{
                start: Date,
                end: Date,
            }],
            price: String,
            // add times schema
            times: [{
                start: String,
                end: String,
            }],
            // add ages schema
            ages: [{
                min: Number,
                max: Number,
            }],
            // add quantity schema
            quantities: [{
                min: Number,
                max: Number,
            }],
            created_at: {
                type: Date,
                default: Date.now
            },
            updated_at: {
                type: Date                
            },
            
        }
    ],
    // other fees schema
    fees: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            name: String,
            notes: String,
            price: Number
        }
    ],
    //  faq schema
    faqs: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            question: String,
            answer: String        
        }
    ],
    socialMedia: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
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
    // sizes schema
    sizes: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            name: String,
            price: Number,
            cube: {
                length: Number,
                width: Number,
                height: Number,
                measurement: String
            },
            wight: {
                amount: Number,
                measurement: String
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
    // pricing schema
    pricingType: [
        
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            types: [String],
            created_at: {
              type: Date,
              default: Date.now
            },
            updated_at: {
              type: Date
            }
        }
    ],
    // product options schema
    productOptions: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            name: String,
            price: Number,
            description: String,
            images: {
                creator: {
                    type: Schema.Types.ObjectId,
                    ref: 'profiles'    
                },
                group: {
                    type: Schema.Types.ObjectId,
                    ref: 'products'    
                },
                directory: String,
                displayName: String,
                notes: String,
                current: Boolean,
                supporters: [
                    {
                        profile: {
                            type: Schema.Types.ObjectId,
                            ref: 'profiles'
                        },
                        created_at: {
                            type: Date,
                            default: Date.now
                        },
                        updated_at: Date
                    }
                ],
                comments: [
                    {
                        profiles: {
                            type: Schema.Types.ObjectId,
                            ref: 'profiles'
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
                ],
                created_at: {
                    type: Date,
                    default: Date.now
                },
                updated_at: {
                    type: Date                
                },
            },
            created_at: {
                type: Date,
                default: Date.now
            },
            updated_at: {
                type: Date                
            },
        }
    ],
    //discounts schema
    discounts: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            users: [{
                type: Schema.Types.ObjectId,
                ref: 'profiles'
            }],
            code: String,
            amount: Number,
            category: String,
            // Add ranges schema
            ranges: [
                {
                    creator: {
                        type: Schema.Types.ObjectId,
                        ref: 'profiles'    
                    },
                    group: {
                        type: Schema.Types.ObjectId,
                        ref: 'products'    
                    },
                    days: [String],
                    date: [{
                        start: Date,
                        end: Date,
                    }],
                    price: String,
                    // add times schema
                    times: [{
                        start: String,
                        end: String,
                    }],
                    // add ages schema
                    ages: [{
                        min: Number,
                        max: Number,
                    }],
                    // add quantity schema
                    quantities: [{
                        min: Number,
                        max: Number,
                    }]
                }
            ],
            
        }
    ],
    //wholesale schema
    wholesale: [
        {
            creator: {
                type: Schema.Types.ObjectId,
                ref: 'profiles'    
            },
            group: {
                type: Schema.Types.ObjectId,
                ref: 'products'    
            },
            quantity: {
                min: Number,
                max: Number,
                category: String
            },
            discount: {
                amount: Number,
                category: String
            },
            // Add date schema
            ranges: {
                creator: {
                    type: Schema.Types.ObjectId,
                    ref: 'profiles'    
                },
                group: {
                    type: Schema.Types.ObjectId,
                    ref: 'products'    
                },
                days: [String],
                date: [{
                    start: Date,
                    end: Date,
                }],
                price: String,
                // add times schema
                times: [{
                    start: String,
                    end: String,
                }],
                // add ages schema
                ages: [{
                    min: Number,
                    max: Number,
                }],
                // add quantity schema
                quantities: [{
                    min: Number,
                    max: Number,
                }],
            },
        }
    ],
    // exclusitivity
    exclusive: {
        locations: [{
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        }],
        bundle: [{
            type: Schema.Types.ObjectId,
            ref: 'products'    
        }],
        customers: [{
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        }],
        associations: [{
            merchant: {
                type: Schema.Types.ObjectId,
                ref: 'merchants'
            },
            category: [String]
        }],
        deliveryServices: [{
            type: Schema.Types.ObjectId,
            ref: 'deliveryServices'    
        }],
        
    },
    // restrictions mays be medical, delivery
    restrictions: [{
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        group: {
            type: Schema.Types.ObjectId,
            ref: 'products'    
        },
        items: [String],
        category: String
    }]
});

module.exports = Product = mongoose.model('products', ProductSchema);