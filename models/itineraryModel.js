//models/itineraryModel.js
const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
  date: Date,
  period: String, // morning, afternoon, evening
  activity: String,
  location: String,
  travelDuration: String,
  notes: String,
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);
