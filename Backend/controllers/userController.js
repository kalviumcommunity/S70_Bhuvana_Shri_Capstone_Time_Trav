const User = require('../models/userModel');

// Fetching data by users ID
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


// Updating data by using ID
exports.updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { ...req.body },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


