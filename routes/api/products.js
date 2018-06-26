const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

// Load Product Model
const Product = require('../../models/products/Product');
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
    if (req.body.product) productFields.id  = req.body.product;
    if (req.body.displayedName) productFields.displayedName  = req.body.displayedName;
    if (req.body.description) productFields.description  = req.body.description;
    if (req.body.primaryImage) productFields.primaryImage  = req.body.primaryImage;
    if (typeof req.body.pricing !== 'undefined') {
      productFields.pricing = req.body.pricing.split('|');
    }
    if (typeof req.body.grouping !== 'undefined') {
      productFields.grouping = req.body.grouping.split('|');
    }
    //we are going to split options, then we are going to map it to the appropriate table.
    if (typeof req.body.options !== 'undefined') {
      productFields.options = req.body.options.split('|');
    }
    if (req.body.approval) productFields.approval  = req.body.approval;
    if (req.body.overide) productFields.overide  = req.body.overide;
    if (req.body.navigate) productFields.navigate  = req.body.navigate;
    if (req.body.published) productFields.published  = req.body.published;
    productFields.updated_at  = MomentNow;
    Product.findOne({id: req.body.product }).then(product => {
      if (product) {
        // Update
        Product.findOneAndUpdate(
          {id: req.body.id },
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