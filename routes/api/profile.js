const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');
const ObjectId = require('mongodb').ObjectId;

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateLocationInput = require('../../validation/location');
const validateFileInput = require('../../validation/file');

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');
// format moment
moment().format();
//get time now
const MomentNow = moment();
// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

/*********************************************************
 *
 *          CRUD profile
 *
 * ******************************************************/

// @route    POST api/profile
// @desc     Create or Update user profile
// @access  Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      console.log(errors)
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.profileType) profileFields.profileType = req.body.profileType;
    if (req.body.displayName) profileFields.displayName = req.body.displayName;
    if (req.body.dob) profileFields.dob = req.body.dob;
    if (req.body.category) profileFields.category = req.body.category;
    if (req.body.email) profileFields.email = req.body.email;
    if (req.body.avatar) profileFields.avatar = req.body.avatar;

    // considerations - Spilt into array
    if (typeof req.body.considerations !== 'undefined') {
      profileFields.considerations = req.body.considerations;
    }
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.phone) profileFields.phone = req.body.phone;
    //automaticly generate a unique handle. We will let customers choose their own unique handles later.
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.status) profileFields.status = req.body.status;

    // locations - Spilt into array
    if (req.body.profileType !== 'main') {
      if (typeof req.body.locations !== 'undefined') {
        profileFields.locations = req.body.locations;
      }
      // files - Spilt into array
      if (typeof req.body.files !== 'undefined') {
        profileFields.files = req.body.files;
      }
    }

    // Created at have a default
    // Automaticly add updated time
    profileFields.updated_at = MomentNow;

    //TO DO: later do the followign apis, attributes, profiles, order tracking, faq, terms, conditions, privacy, ratings, cotting

    console.log(req.body);
    Profile.findOne({
      _id: req.body._id
    }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { _id: req.body._id },
          { $set: profileFields },
          { upsert: true, 'new': true }
        ).then(profile => res.json(profile));
      } else {
        // Create
        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'That handle already exists';
            console.log(errors);
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Admin

router.get('/all', (req, res) => {
  const errors = {};

  Profile.find()
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id, category: ['self'] })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(204).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(204).json(err));
  }
);

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this user' })
    );
});

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.post(
  '/delete',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.body);
    if (req.body.profileType !== 'main') {
      Profile.findOneAndRemove({ _id: req.body.profileId }).then(() => {
        res.json({ success: true })
      });
    } else {
      res.status(404).json({ message: 'Cannot delete main profile' });
    }
  }
);

module.exports = router;

/*********************************************************
 *
 *          CRUD Location
 *
 * ******************************************************/

// @route   GET api/profile/file/test
// @desc    Tests profile route
// @access  Public
router.get('/location/test', (req, res) =>
  res.json({ msg: 'location  Works' })
);

/**** Create and Update **/

// @route   POST api/profile/location
// @desc    Add location to profile
// @access  Private
router.post(
  '/location',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateLocationInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }


    Profile.findOne({ _id: req.body.profile }).then(
      profile => {
        console.log(req.body)
        const newFile = {
          address: req.body.address,
          apartment: req.body.apartment,
          categories: req.body.categories !== 'undefined' && req.body.categories,
          notes: req.body.notes,
          owner: req.body.owner,
          ownerName: req.body.ownerName,
          updated_at: MomentNow
        };

        let index = profile.locations.map(item => item.id).indexOf(req.body.location_id);

        if (index > -1) {
          // update
          profile.locations[index] = Object.assign({}, profile.locations[index], newFile);
        } else {
          // Add to exp array
          profile.locations.unshift(newFile);
        }

        profile.save().then(profile => res.json(profile));
      }
    );
  }
);

/**** Read **/

/**** Delete **/

// @route   DELETE api/profile/location/:location_id
// @desc    Delete a location from profile
// @access  Private
router.post(
  '/location/delete',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Profile.findOne({ user: req.user.id, _id: req.body.profile }).then(
      profile => {
        // Get remove index
        const removeIndex = profile.locations
          .map(item => item.id)
          .indexOf(req.body.location_id);

        // Splice out of array
        profile.locations.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
  }
);

/*********************************************************
 *
 *          CRUD File
 *
 * ******************************************************/

// @route   GET api/profile/file/test
// @desc    Tests profile route
// @access  Public
router.get('/file/test', (req, res) => res.json({ msg: 'file  Works' }));

/**** Create and Update **/

// @route   POST api/profile/file
// @desc    Add file to profile
// @access  Private
router.post(
  '/file',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      console.log(errors)
      return res.status(400).json(errors);
    }

    Profile.findOne({ _id: req.body.profile }).then(
      profile => {
        const newFile = {
          displayName: req.body.displayName,
          notes: req.body.notes,
          categories: req.body.categories,
          directory: req.body.directory,
          owner: req.body.owner,
          updated_at: MomentNow
        };

        const index = profile.files.map(item => item.id).indexOf(req.body.file_id);

        if (index > -1) {
          // update
          profile.files[index] = Object.assign({}, profile.files[index], newFile);
        } else {
          // Add to exp array
          profile.files.unshift(newFile);
        }

        profile.save().then(profile => res.json(profile));
      }
    );
  }
);

/**** Read **/

/**** Delete **/

// @route   DELETE api/profile/file/:file_id
// @desc    Delete a file from profile
// @access  Private
router.post(
  '/file/delete',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id, _id: req.body.profile })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.files
          .map(item => item.id)
          .indexOf(req.body.file_id);

        // Splice out of array
        profile.files.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);
