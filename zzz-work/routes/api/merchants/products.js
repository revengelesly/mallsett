const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

// Load Product Model
const Product = require('../../../models/merchants/Product');
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

// @route    POST api/merchant/product
// @desc     Create or Update merchant products
// @access   Private

router.post('/', passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // Get fields
    const productFields = {};
    // Info
    productFields.owner = req.body.owner;
    productFields.creator = req.body.creator;
    if (req.body.group) productFields.group  = req.body.group;
    if (req.body.displayName) productFields.displayName  = req.body.displayName;
    if (req.body.pitch) productFields.pitch  = req.body.pitch;
    if (typeof req.body.availability !== 'undefined') {
      productFields.availability = req.body.availability.split(',');
    }
    if (typeof req.body.noChanges !== 'undefined') {
      productFields.noChanges = req.body.noChanges.split(',');
    }
    productFields.updated_at  = MomentNow;
    Product.findOne({__id: req.body.id }).then(product => {
      if (product) {
        // Update
        Product.findOneAndUpdate(
          {__id: req.body.id },
          { $set: productFields },
          { new: true }
        ).then(product => res.json(product));
      } else {
        // Create
        new Product(productFields).save().then(product => res.json(product));
      }
    });
  }
);

module.exports = router;