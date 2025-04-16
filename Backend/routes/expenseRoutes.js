const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addExpense, getTripExpenses, deleteExpense } = require('../controllers/expenseController');

// Post route for creating expense
router.post('/', auth, addExpense);

// Get route for trip expenses
router.get('/:tripId', auth, getTripExpenses);

// Delete route for expensive
router.delete('/:id', auth, deleteExpense);

module.exports = router;