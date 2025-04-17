const express = require('express');
const authmiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/protected-route', authmiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;