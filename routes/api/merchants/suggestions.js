const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

// Load Product Model
const Suggestion = require('../../../models/merchants/Suggestion');

// Load Profile Model
moment().format();

//get time now
const MomentNow = moment();


// @route    POST /api/merchants/suggestions
// @desc     Create suggestion
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid, warning } = {};
    // Get fields
    const fields = {};

    fields.googlePlaceId = req.body.googlePlaceId;
    fields.targeted = req.body.targeted;
    fields.createdBy = req.body.profileId;

    Suggestion.findOne({ googlePlaceId: req.body.googlePlaceId }).then(suggestion => {
      if (!suggestion) {
        new Suggestion(fields).save().then(x => res.json(x));
      } else {
        return res.status(400).json({message: 'Suggestion already existed'})
      }
    });
  }
);

// @route    GET /api/merchants/suggestions/profileId
// @desc     GET all suggestions
// @access  Private
router.get(
  '/',
  (req, res) => {
    console.log('đã vô');
    Suggestion.find().then(suggestions => {
      if (suggestions && suggestions.length > 0) {
        return res.json(suggestions);
      } else {
        return res.json([]);
      }
    })
  }
)

module.exports = router;
