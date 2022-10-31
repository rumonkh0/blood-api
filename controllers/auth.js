const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password, mobile, fb_id, permanent_zilla, permanent_tahna, permanent_address, present_zilla, present_thana, present_address, blood_group, sex, last_donate } = req.body;

    // Create user
    const user = await User.create({
        name, email, password, mobile, fb_id, permanent_zilla, permanent_tahna, permanent_address, present_zilla, present_thana, present_address, blood_group, sex, last_donate
    });


    // Create reset url
    // const confirmEmailURL = `${req.protocol}://${req.get(
    //   'host',
    // )}/api/v1/auth/confirmemail?token=${confirmEmailToken}`;

    // const message = `You are receiving this email because you need to confirm your email address. Please make a GET request to: \n\n ${confirmEmailURL}`;


    // const sendResult = await sendEmail({
    //   email: user.email,
    //   subject: 'Email confirmation token',
    //   message,
    // });


    user.save({ validateBeforeSave: false });

    sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
    const { mobile, password } = req.body;

    // Validate emil & password
    if (!mobile || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    // Check for user
    const user = await User.findOne({ mobile }).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true,
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
    });
};