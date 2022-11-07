
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const user = require('../models/User');

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});


// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    res.status(200).json({
      success: true,
      data: user
    });
  });