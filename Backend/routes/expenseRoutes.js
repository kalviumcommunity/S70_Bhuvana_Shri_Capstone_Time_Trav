const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addExpense, getTripExpenses, deleteExpense } = require('../controllers/expenseController');

router.post('/', auth, addExpense);
router.get('/:tripId', auth, getTripExpenses);
router.delete('/:id', auth, deleteExpense);

module.exports = router;