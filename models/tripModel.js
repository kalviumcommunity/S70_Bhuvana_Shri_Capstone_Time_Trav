const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({

    user: 
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },

    tripName: 
    { 
        type: String, 
        required: true 
    },

    destination: 
    { 
        type: String, 
        required: true 
    },

    startDate: 
    { 
        type: Date, 
        required: true 
    },

    endDate: 
    { 
        type: Date, 
        required: true 
    },

    travelCompanions: [{ type: String }],

    notes: 
    { 
        type: String 
    },

    visibility: 
    { 
        type: String, 
        enum: ['public', 'private', 'friends-only'], 
        default: 'private' 
    }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
