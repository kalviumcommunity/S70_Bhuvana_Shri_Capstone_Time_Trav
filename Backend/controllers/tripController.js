const Trip = require('../models/tripModel');

exports.createTrip = async (req, res) => {
  try {
    const trip = new Trip({ ...req.body, user: req.userId });
    await trip.save();
    res.status(201).json(trip);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getUserTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.userId });
    res.json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTrip);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    return res.json({ message: 'Trip deleted' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
