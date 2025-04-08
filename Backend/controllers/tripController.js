const Trip = require('../models/tripModel');
exports.createTrip = async (req, res) => {
    try {
        const { tripName, destination, startDate, endDate, travelCompanions, notes, visibility } = req.body;

        const trip = await Trip.create({
            user: req.user.id,
            tripName,
            destination,
            startDate,
            endDate,
            travelCompanions,
            notes,
            visibility
        });

        res.status(201).json(trip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get user's trips
exports.getUserTrips = async (req, res) => {
    try {
        const trips = await Trip.find({ user: req.user.id });
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
