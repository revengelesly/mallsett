const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateSettingInput = require('../../validation/setting');
const sendMail = require('../../utilities/mailer');

// Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.message = 'Email already exists';
      return res.status(409).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        avatar,
        password: req.body.password,
        age: req.body.age,
        isActive: true
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user

    if (!user || !user.isActive) {
      errors.message = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar, dob: user.dob, phone: user.phone }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 * 24 * 7 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
              profile: user
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/update
// @desc    Update User / Returning JWT Token
// @access  Public

router.post('/update', (req, res) => {
  const { errors, isValid } = validateSettingInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.currentEmail;
  const password = req.body.currentPassword;

  // Find user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({email: 'User not found'});
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        user.name = req.body.name ? req.body.name : user.name;
        user.email = req.body.email ? req.body.email : user.email;
        user.phone = req.body.phone ? req.body.phone : user.phone;
        user.dob = req.body.dob ? req.body.dob : user.dob;
        user.avatar = req.body.avatar ? req.body.avatar : user.avatar;
        user.age = req.body.age ? req.body.age : user.age;

        if (req.body.password) {
          user.password = req.body.password,
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          });
        } else {
          user.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        }
      } else {
        return res.status(400).json({message: 'Password incorrect'});
      }
    }).catch(err => {
      console.log(err)
    });
  });
});

// @route   GET api/users/fogotpassword
// @desc    Create new password then send email to user
// @access  Public

router.post('/fogotpassword', (req, res) => {
  const email = req.body.email;

  // Find user by email
  User.findOne({ email }).then(user => {
    if (user) {
      user.password = bcrypt.genSaltSync(2);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          let newPassword = user.password;
          user.password = hash;
          user
            .save()
            .then(user => {
              const mailOptions = {
                from: 'email@gmail.com',
                to: user.email,
                subject: 'Your new password',
                text: `Your new password is ${newPassword}`
              };
              sendMail(mailOptions);
              res.json(user);
            })
            .catch(err => console.log(err));
        })
      });
    }
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      dob: req.user.dob,
      phone: req.user.phone
    });
  }
);

// @route   GET api/users/delete
// @desc    Delete current user
// @access  Private
router.delete(
  '/delete',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOne({ _id: req.user._id }).then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
          if (isMatch) {
            user.isActive = false;
            console.log(user);
            user.save().then(user => res.json(user));
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        })
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
  }
);

module.exports = router;
