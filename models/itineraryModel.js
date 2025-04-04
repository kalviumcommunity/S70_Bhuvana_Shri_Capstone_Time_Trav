const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({

    trip: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Trip', 
        required: true 
    },

    date: 
    { 
        type: Date, 
        required: true 
    },
    activities: [{
        time: String,
        activity: String,
        location: String,
        transportation: String,
        notes: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', itinerarySchema);
