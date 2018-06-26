const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema
const GroupingSchema = new Schema({

    grouping: {
        displayedName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        primaryImage: {
            type: Schema.Types.ObjectId,
            ref: 'organizeFile',
        },
        files: {
            type: Schema.Types.ObjectId,
            ref: 'organizeFile',
            folder: [String],
        },
        folder: [String],
        published: Boolean,
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        },
        updated_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    },
    file: [{
        directory: {
            type: String,
            required: true
        },
        displayedName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        folder: [String],
        approval: {
            type: Boolean,
            default: false
        },
        overide:  {
            type: Boolean,
            default: true
        },
        navigate:  {
            type: Boolean,
            default: false
        },
        published:  {
            type: Boolean,
            default: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        },
        updated_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
    size: [{
        price: {
            type: String,
            required: true
        },
        width: {
            type: String,
            measurement: String
        },
        height: {
            type: String,
            measurement: String
        },
        weight: {
            type: String,
            measurement: String
        },
        
        length: {
            type: String,
            measurement: String
        },
        displayedName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        folder: [String],
        approval: {
            type: Boolean,
            default: false
        },
        overide:  {
            type: Boolean,
            default: true
        },
        navigate:  {
            type: Boolean,
            default: false
        },
        published:  {
            type: Boolean,
            default: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        },
        updated_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
    dateRange: [{
        dateStart: Date,
        dateEnd: Date,
        displayedName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        folder: [String],
        approval: {
            type: Boolean,
            default: false
        },
        overide:  {
            type: Boolean,
            default: true
        },
        navigate:  {
            type: Boolean,
            default: false
        },
        published:  {
            type: Boolean,
            default: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        },
        updated_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
    timeRange: [{
        timeStart: String,
        timeEnd: String,
        displayedName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        folder: [String],
        approval: {
            type: Boolean,
            default: false
        },
        overide:  {
            type: Boolean,
            default: true
        },
        navigate:  {
            type: Boolean,
            default: false
        },
        published:  {
            type: Boolean,
            default: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        },
        updated_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
    ageRange: [{
        minimum: {
            type: Number,
            default: 0
        },
        maximum: {
            type: Number,
            default: 200
        },
        displayedName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        folder: [String],
        approval: {
            type: Boolean,
            default: false
        },
        overide:  {
            type: Boolean,
            default: true
        },
        navigate:  {
            type: Boolean,
            default: false
        },
        published:  {
            type: Boolean,
            default: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        },
        updated_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
    classRange: [{
        minimum: {
            type: Number,
            default: 0
        },
        maximum: {
            type: Number,
            default: 200
        },
        displayedName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        folder: [String],
        approval: {
            type: Boolean,
            default: false
        },
        overide:  {
            type: Boolean,
            default: true
        },
        navigate:  {
            type: Boolean,
            default: false
        },
        published:  {
            type: Boolean,
            default: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'profiles'    
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'merchants'    
        },
        updated_at: Date,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
});

module.exports = group = mongoose.model('groups', GroupingSchema);