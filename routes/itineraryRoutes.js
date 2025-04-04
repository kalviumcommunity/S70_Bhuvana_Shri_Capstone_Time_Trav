const express = require('express');
const { addItinerary, getTripItinerary } = require('../controllers/itineraryController');
const router = express.Router();

router.post('/', addItinerary);
router.get('/:tripId', getTripItinerary);

module.exports = router;
