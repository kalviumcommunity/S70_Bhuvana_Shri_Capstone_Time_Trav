const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer'); // or any email service you use
const User = require('../models/userModel');

// Utility function to generate token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// @route   POST /api/auth/signup
// @desc    Register new user
// @access  Public
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if all fields are present
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token
    const token = generateToken(newUser._id);

    res.status(201).json({
      message: 'Signup successful',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
exports.login = async (req, res) => {
      const email = req.body.email.trim().toLowerCase();
    const password = req.body.password.trim();

  try {
    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email: req.body.email });
if (!user) {
  return res.status(401).json({ message: "Invalid credentials" });
}

const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
if (!isPasswordValid) {
  return res.status(401).json({ message: "Invalid credentials" });
}

    const token = generateToken(user._id);

    res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({
        message: 'Login successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Public
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};



// @route   POST /api/auth/forgot-password
// @desc    Send reset link to user's email
// @access  Public
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Generate token and expiry
    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yourgmail@gmail.com',
        pass: 'your-app-password', // NOT your real Gmail password
      },
    });

    const resetUrl = `http://localhost:5000/reset-password/${resetToken}`;
    const mailOptions = {
      to: user.email,
      from: 'yourgmail@gmail.com',
      subject: 'Password Reset',
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
  message: 'Reset link sent!', 
  resetUrl 
});


  } catch (err) {
    console.error('Forgot Password Error:', err);
    res.status(500).json({ message: 'Error sending reset email' });
  }
};

// @route   POST /api/auth/reset-password/:token
// @desc    Reset user's password
// @access  Public
exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.password = await bcrypt.hash(password, 12);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    // Auto-login after password reset
    const newToken = generateToken(user._id);
    res
      .cookie('token', newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: 'Password has been reset',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token: newToken,
      });
  } catch (error) {
    console.error('Reset Password Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// @route   POST /api/auth/google
// @desc    Handle Google OAuth authentication
// @access  Public
exports.googleAuth = async (req, res) => {
  const { name, email, googleId } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user if doesn't exist
      user = new User({
        name,
        email,
        googleId,
        password: crypto.randomBytes(16).toString('hex') // Generate random password for Google users
      });
      await user.save();
    } else {
      // Update existing user's googleId if not set
      if (!user.googleId) {
        user.googleId = googleId;
        await user.save();
      }
    }

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(200).json({
      message: 'Google authentication successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    });
  } catch (error) {
    console.error('Google auth error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

