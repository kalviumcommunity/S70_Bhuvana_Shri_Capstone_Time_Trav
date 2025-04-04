const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error for debugging

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Ensure correct status code
    res.status(statusCode).json({
        message: err.message || 'Something went wrong',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack in production
    });
};

module.exports = errorHandler;
    