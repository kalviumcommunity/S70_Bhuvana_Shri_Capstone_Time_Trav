const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({

    trip: 
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Trip', 
        required: true 
    },

    category: 
    { 
        type: String, 
        enum: ['Food', 'Transport', 'Stay', 'Activities', 'Miscellaneous'], 
        required: true 
    },

    amount: 
    { 
        type: Number, 
        required: true 
    },

    currency: 
    { 
        type: String, 
        default: 'USD' 
    },

    date: 
    { 
        type: Date, 
        required: true 
    },

    description: 
    { 
        type: String 
    }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
