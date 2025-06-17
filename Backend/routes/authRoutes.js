//routes/authRoutes.js
const express = require('express');
const router = express.Router();
const {signup, login, logout, forgotPassword, resetPassword, googleAuth } = require('../controllers/authController');

// Routes of POST 
router.post('/signup', signup);
router.post('/login', login);
router.post('/google', googleAuth);
router.post('/logout', logout);
router.post('/forgot-password',forgotPassword);
router.post('/reset-password',resetPassword);

module.exports = router;