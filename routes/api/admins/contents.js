const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

// Load Product Model
const Contents = require('../../../models/admins/Contents');
// Load Profile Model
moment().format();
//get time now
const MomentNow = moment();

// @route   GET api/products/test
// @desc    Tests products route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Product Works' }));




/*********************************************************
 *
 *          CRUD products
 *
 * ******************************************************/

// @route    POST api/admin/contents
// @desc     Create or Update contents
// @access   Private

router.post('/admin/contents/selectOptions', passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // Get fields
    const selectOptionsFields = {};
    // Info
    selectOptionsFields.creator = req.body.admin;
    if (req.body.category) selectOptionsFields.category  = req.body.category;
    if (req.body.content) selectOptionsFields.content = req.body.content;
    if (req.body.availability) selectOptionsFields.availability = req.body.availability;
    if (req.body.private) selectOptionsFields.private = req.body.private;
    if (req.body.accountType) selectOptionsFields.accountType = req.body.accountType;
    if (typeof req.body.allowed !== 'undefined') {
      selectOptionsFields.allowed = req.body.allowed.split(',');
    }
    if (typeof req.body.banned !== 'undefined') {
      selectOptionsFields.banned = req.body.banned.split(',');
    }
    selectOptionsFields.updated_at  = MomentNow;
    Contents.findOne({__id: req.body.id }).then(content => {
      if (content) {
        // Update
        Contents.findOneAndUpdate(
          {__id: req.body.id },
          { $set: selectOptionsFields },
          { new: true }
        ).then(product => res.json(content));
      } else {
        // Create
        new Contents(selectOptionsFields).save().then(content => res.json(content));
      }
    });
  }
);

// @route    GET api/admin/contents
// @desc     Create or Update contents
// @access   Private
router.get('/',
  (req, res) => {
    Contents.find()
            .then(contents => {
              if (contents) {
                res.json(contents)
              } else {
                res.status(404).json({ message: '' })
             }
            })
  }
)

module.exports = router;
