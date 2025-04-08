const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { updateUser } = require('../controllers/userController');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);


router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
