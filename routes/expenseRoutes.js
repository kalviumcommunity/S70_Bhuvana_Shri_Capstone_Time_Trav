const express = require('express');
const { addExpense, getTripExpenses } = require('../controllers/expenseController');
const router = express.Router();

router.post('/', addExpense);
router.get('/:tripId', getTripExpenses);

module.exports = router;
