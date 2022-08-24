const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User');
const { ConnectionStates } = require('mongoose');

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */
router.post('/register', async (req, res) => {
  let { name, username, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: 'Passwords do not match',
    });
  }
  // Check for the unique Username
  const foundUserName = await User.findOne({ username: username });
  if (foundUserName) {
    return res.status(400).json({
      msg: 'Username is already taken',
    });
  }
  // Check for the unique Email
  const foundEmail = await User.findOne({ email: email });
  if (foundEmail) {
    return res.status(400).json({
      msg: 'Email is already registered. Did you forget your password?',
    });
  }
  // Valid data, register the user
  let newUser = new User({
    name,
    username,
    password,
    email,
  });
  // Hash the password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: true,
          msg: 'User has been registered.',
        });
      });
    });
  });
});

module.exports = router;
