const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

// Load Validation
const validateLocationInput  = require('../../validation/location');


// Load Profile Model
const Profile = require('../../models/Profile');

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
 *          CRUD Location
 * 
 * ******************************************************/
 
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

    Profile.findOne({ user: req.user.id }).then(profile => {
      
      const newLocation = {
        googlePlaceId: req.body.googlePlaceId,
        //auto generate name if there is no name. We are not going to ask customers to put a name for the address
        name: req.body.name,
        address: req.body.address,
        apartment: req.body.apartment,
        phone: req.body.phone,
        notes: req.body.notes,
        categories: function(){
          if (typeof req.body.categories !== 'undefined') {
           return req.body.categories.split(',');
          }
          return req.body.categories;
        }(),
        updated_at: MomentNow,
      };

      // Add to exp array
      profile.location.unshift(newLocation);

      profile.save().then(profile => res.json(profile));
    });
  }
);

