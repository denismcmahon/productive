const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the PasswordReset Schema
const PasswordResetSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = User = mongoose.model('passwordReset', PasswordResetSchema);
