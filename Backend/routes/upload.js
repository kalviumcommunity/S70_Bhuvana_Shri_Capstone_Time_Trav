const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const cloudinary = require('../config/cloudinary');
const multer = require('multer');
const streamifier = require('streamifier');

// Set up multer to store file in memory (not on disk)
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * @route   POST /api/upload
 * @desc    Upload image/video to Cloudinary
 * @access  Private
 */
router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'No file uploaded' });

    // Upload to Cloudinary using stream
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: 'auto' },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    const result = await streamUpload(file.buffer);
    return res.status(200).json({ url: result.secure_url });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
