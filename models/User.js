const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    // required: [true, 'Please add an email'],
    // unique: false,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  mobile: {
    type: String,
    unique: true,
    required: [true, "Please enter your mobile nomber"],
  },
  fb_id: String,
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 8,
    select: false,
  },
  permanent_zilla: {
    type: String,
    // required: true
  },
  permanent_tahna: {
    type: String,
    // required: true
  },
  permanent_address: String,
  present_zilla: {
    type: String,
    // required: true
  },
  present_thana: {
    type: String,
    // required: true
  },
  present_address: String,
  blood_group: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  gendermf: { type: String, enum: ["male", "female"] },
  last_donate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.matchPassword = function (enteredPassword) {
  if (enteredPassword == this.password) return true;
  else return false;
};

module.exports = mongoose.model("User", UserSchema);
