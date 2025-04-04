const Itinerary = require('../models/itineraryModel');

// Add itinerary for a trip
exports.addItinerary = async (req, res) => {
    try {
        const { tripId, date, activities } = req.body;

        const itinerary = await Itinerary.create({
            trip: tripId,
            date,
            activities
        });

        res.status(201).json(itinerary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get itinerary for a trip
exports.getTripItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.find({ trip: req.params.tripId });
        res.json(itinerary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
