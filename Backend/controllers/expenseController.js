const Expense = require('../models/expenseModel');

// Add an expense
exports.addExpense = async (req, res) => {
    try {
        const { tripId, category, amount, currency, date, description } = req.body;

        const expense = await Expense.create({
            trip: tripId,
            category,
            amount,
            currency,
            date,
            description
        });

        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get trip expenses
exports.getTripExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ trip: req.params.tripId });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

