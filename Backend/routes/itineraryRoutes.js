const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createItinerary, getTripItinerary, updateItinerary, deleteItinerary } = require('../controllers/itineraryController');

router.post('/', auth, createItinerary);
router.get('/:tripId', auth, getTripItinerary);
router.put('/:id', auth, updateItinerary);
router.delete('/:id', auth, deleteItinerary);

module.exports = router;
