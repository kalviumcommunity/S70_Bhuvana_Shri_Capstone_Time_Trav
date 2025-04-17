const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Remove all warnings (Including punycode deprecation)
process.removeAllListeners('warning');  // Suppress warnings

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const uploadRoutes = require('./routes/upload');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/itinerary', itineraryRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/upload', uploadRoutes);

// Error middleware (Make sure this is after the routes are set)
const error = require('./middleware/error');
app.use(error);

// ✅ Set Mongoose strictQuery to suppress deprecation warning
mongoose.set('strictQuery', true);

// ✅ Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit the process if the connection fails
  });
