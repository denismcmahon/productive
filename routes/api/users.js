const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');
const PasswordReset = require('../../model/PasswordReset');

const transporter = nodemailer.createTransport({
  host: '0.0.0.0',
  port: 1025,
});

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

/**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: 'Username is not found.',
        success: false,
      });
    }
    // If user is found compare the password
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        // User password is correct, need to send the JSON token for the user
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
        };
        jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
          res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            user: user,
            msg: 'User is logged in.',
          });
        });
      } else {
        return res.status(404).json({
          msg: 'Incorrect password.',
          success: false,
        });
      }
    });
  });
});

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
    user: req.user,
  });
});

/**
 * @route POST api/users/forgot
 * @desc Sends email for forgotten password
 * @access Public
 */
router.post('/forgot', async (req, res) => {
  console.log('DM ==> here in forgot route ==> req.body: ');
  console.log(req.body);
  const email = req.body.email;
  const token = Math.random().toString().substring(2, 12);

  const passwordReset = new PasswordReset({
    email,
    token,
  });

  await passwordReset.save();

  const url = `http://localhost:8080/reset/${token}`;

  await transporter.sendMail({
    from: 'admin@example.com',
    to: email,
    subject: 'Reset your password!',
    html: `Click <a href="${url}">here</a> to reset your password!`,
  });

  res.json({
    msg: 'Check your mail!',
  });
});

/**
 * @route POST api/users/reset
 * @desc Resets users password
 * @access Public
 */
router.post('/reset', async (req, res) => {
  if (req.body.password !== req.body.password_confirm) {
    return res.status(400).json({
      msg: 'Passwords do not match',
    });
  }

  const passwordReset = await PasswordReset.findOne({ token: req.body.token });

  const { email } = await passwordReset.toJSON();

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      msg: 'User not found',
    });
  }

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(req.body.password, salt);
  user.save();

  res.json({
    msg: 'success',
  });
});

module.exports = router;
