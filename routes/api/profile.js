const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validatePortfolioPiecesInput = require('../../validation/portfolioPieces');
const validateSocialMediaInput = require('../../validation/socialMedia');
const validateLocationInput  = require('../../validation/location');
const validateAttributeInput = require('../../validation/attribute');
const validateApiInput = require('../../validation/api');

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
 *          CRUD portfolio
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
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.category) profileFields.category = req.body.category;
    if (req.body.displayName) profileFields.displayName = req.body.displayName;
    if (req.body.phone) profileFields.phone = req.body.phone;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.dob) profileFields.dob = req.body.dob;
    if (req.body.status) profileFields.status = req.body.status;
    // Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }
    if (req.body.pitch) profileFields.pitch = req.body.pitch;
    if (req.body.bio) profileFields.bio = req.body.bio;
    

    // Timing
    profileFields.updated_at = MomentNow;

    Profile.findOne({ user: req.user.id, category: req.body.category }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id, category: req.body.category},
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'That handle already exists';
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
    .populate('user', ['name', 'avatar'])
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

    Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
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
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;

/*********************************************************
 * 
 *          CRUD portfolio piece
 * 
 * ******************************************************/


// @route   CREATE POST api/profile/portfolio-piece
// @desc    Add portfolio pieces to profile
// @access  Private


router.post(
  '/portfolio-piece',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePortfolioPiecesInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const portfolioPiece = {
        type: req.body.type,
        title: req.body.title,
        subject: req.body.subject,
        focus: req.body.focus,
        company: {
          name: req.body.companyName,
          googlePlaceId: req.body.companyGooglePlaceId
        },
        location: {
          address: req.body.locationAddress,
          googlePlaceId: req.body.locationGooglePlaceId
        },
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
        links: function(){
          if(typeof req.body.links !== 'undefined'){
           return req.body.links.split(',');
          } 
          return req.body.links;
        }(),
        updated_at: MomentNow
        
      };

      // Add to exp array
      profile.portfolioPiece.unshift(portfolioPiece);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   DELETE api/profile/portfolio-piece/:piece_id
// @desc    Delete portfolio pieces from profile
// @access  Private
router.delete(
  '/portfolio-piece/:piece_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.portfolioPiece
          .map(item => item.id)
          .indexOf(req.params.piece_id);

        // Splice out of array
        profile.portfolioPiece.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);


/*********************************************************
 * 
 *          CRUD Social Media
 * 
 * ******************************************************/
 
// @route   POST api/profile/socialMedia
// @desc    Add Social Media Link to profile
// @access  Private
router.post(
  '/social-media',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSocialMediaInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      
      const newSocialMedia = {
        channel: req.body.channel,
        link: req.body.link,
        updated_at: MomentNow
      };

      // Add to exp array
      profile.socialMedia.unshift(newSocialMedia);

      profile.save().then(profile => res.json(profile));
    });
  }
);

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
        name: req.body.name,
        googlePlaceId: req.body.googlePlaceId,
        address: req.body.address,
        apartment: req.body.apartment,
        categories: function(){
          if (typeof req.body.categories !== 'undefined') {
           return req.body.categories.split(',');
          }
          return req.body.categories;
        }(),
        current: req.body.current,
        updated_at: MomentNow,
        notes: req.body.notes
        
      };

      // Add to exp array
      profile.location.unshift(newLocation);

      profile.save().then(profile => res.json(profile));
    });
  }
);

/*********************************************************
 * 
 *          CRUD attributes
 * 
 * ******************************************************/
// @route   POST api/profile/attribute
// @desc    Add attribute to profile
// @access  Private
router.post(
  '/attribute',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateAttributeInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      
      const newAttribute = {
        category: req.body.category,
        item: req.body.item
      };

      // Add to exp array
      profile.attribute.unshift(newAttribute);

      profile.save().then(profile => res.json(profile));
    });
  }
);

/*********************************************************
 * 
 *          CRUD Apis
 * 
 * ******************************************************/
 
// @route   POST api/profile/api
// @desc    Add api to profile
// @access  Private
router.post(
  '/api',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateApiInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      
      const newApi = {
        category: req.body.category,
        secret: req.body.secret,
        access: function(){
          if (typeof req.body.access !== 'undefined') {
           return req.body.access.split(',');
          }
          return req.body.access;
        }()
        
      };

      // Add to exp array
      profile.api.unshift(newApi);

      profile.save().then(profile => res.json(profile));
    });
  }
);


// @route   DELETE api/profile/social-media/:channel_id
// @desc    Delete education from profile
// @access  Private
router.delete(
  '/social-media/:channel_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.socialMedia
          .map(item => item.id)
          .indexOf(req.params.channel_id);

        // Splice out of array
        profile.socialMedia.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   DELETE api/profile/location/:location_id
// @desc    Delete a location from profile
// @access  Private
router.delete(
  '/location/:location_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.location
          .map(item => item.id)
          .indexOf(req.params.location_id);

        // Splice out of array
        profile.location.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);


