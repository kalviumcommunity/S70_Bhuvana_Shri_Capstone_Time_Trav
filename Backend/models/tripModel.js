const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tripName: String,
  destination: String,
  startDate: Date,
  endDate: Date,
  companions: [String],
  notes: String,
  visibility: { type: String, enum: ['public', 'private', 'friends'], default: 'private' },
  media: [String],
});

module.exports = mongoose.model('Trip', TripSchema);