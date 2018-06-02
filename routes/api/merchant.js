const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

// add regex
// remove special characters except for commas
function cleanString(string){
  return string.replace(/[^A-Za-z,0-9]/g, "");
}
// Load Validation
// Load Merchant Model
const Merchant = require('../../models/Merchant');
// format moment
moment().format();
//get time now
const MomentNow = moment();
// @route   GET api/merchant/test
// @desc    Tests merchant route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Merchant Works' }));




/*********************************************************
 *
 *          CRUD merchant
 *
 * ******************************************************/

// @route    POST api/merchant
// @desc     Create or Update merchant
// @access  Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid, warning } = {};
    // Get fields
    const merchantField = {
      place: {},
      detail: {},
    };
    merchantField.creator = req.body.profile;
    merchantField.updated_at = MomentNow;
    merchantField.place = req.body.place;

    if (typeof req.body.businessType !== 'undefined') {
      merchantField.businessType = req.body.businessType;
    }

    if (req.body.phone) merchantField.phone = req.body.phone;

    if (req.body.associates) {
      merchantField.associates = req.body.associates;
    }

    if (req.body.photo) merchantField.place.photo = req.body.photo;
    if (req.body.handle) merchantField.handle = req.body.handle;
    if (req.body.notes) merchantField.place.notes = req.body.notes;
    if (req.body.pitch) merchantField.detail.pitch = req.body.pitch;
    if (req.body.bio) merchantField.detail.bio = req.body.bio;
    if (req.body.terms) merchantField.detail.terms = req.body.terms;
    if (req.body.privacy) merchantField.detail.privacy = req.body.privacy;
    if (req.body.category) merchantField.category = req.body.category;
    if (req.body.createdBy) merchantField.createdBy = req.body.createdBy;

    if (req.body.logo) merchantField.logo = req.body.logo;

    if (req.body.gallery) merchantField.gallery = req.body.gallery;

    if (req.body.socialMedia) merchantField.socialMedia = req.body.socialMedia;

    if (req.body.personalEmail) merchantField.personalEmail = req.body.personalEmail;

    if (req.body.businessEmail) merchantField.businessEmail = req.body.businessEmail;

    // check to see if handle exists after merchant update the handle


    Merchant.findOne({ _id: req.body.merchant_id }).then(merchant => {
      if (merchant) {
        // Update
        Merchant.findOneAndUpdate(
          { _id: req.body.merchant_id},
          { $set: merchantField },
          { upsert: true, 'new': true }
        ).then(merchant => res.json(merchant));
      } else {
        // Create

        // Check if handle exists
        Merchant.findOne({ handle: req.body.handle }).then(merchant => {
          if (merchant) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Profile
          new Merchant(merchantField).save().then(merchant => res.json(merchant));
        });
      }
    });
  }
);

router.post(
  '/delete/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Merchant.findOne({ _id: req.body.merchant_id }).then(merchant => {
      if (merchant) {
        Merchant.deleteOne({_id: req.body.merchant_id})
        .then(merchant => res.json(merchant))
        .catch(err => console.log(err));
      } else {
        return res.status(404).json({message: 'Merchant not found'});
      }
    });
  }
)

router.get(
  '/',
  (req, res) => {
    Merchant.find().then(merchants => {
      if (merchants) {
        res.json(merchants)
      } else {
        return res.status(404).json({message: 'Merchant not found'});
      }
    });
  }
)

module.exports = router;
