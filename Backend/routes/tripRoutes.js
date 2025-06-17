//routes/tripRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createTrip, getUserTrips, updateTrip, deleteTrip } = require('../controllers/tripController');

router.post('/', auth, createTrip);
router.get('/', auth, getUserTrips);
router.put('/:id', auth, updateTrip);
router.delete('/:id', auth, deleteTrip);

module.exports = router;