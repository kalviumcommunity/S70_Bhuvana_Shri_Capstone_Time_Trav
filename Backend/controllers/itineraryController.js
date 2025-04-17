const Itinerary = require('../models/itineraryModel');

exports.createItinerary = async (req, res) => {
  try {
    const itinerary = new Itinerary(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getTripItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.find({ trip: req.params.tripId });
    res.json(itinerary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update itinerary by ID
exports.updateItinerary = async (req, res) => {
  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItinerary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Deleting itinerary by ID 
exports.deleteItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);
    res.json({ message: 'Itinerary deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};