const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
  amount: Number,
  category: String,
  currency: String,
  description: String,
  date: Date,
});

module.exports = mongoose.model('Expense', ExpenseSchema);