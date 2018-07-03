const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');

const clients = [];

// add regex
// remove special characters except for commas
function cleanString(string) {
  return string.replace(/[^A-Za-z,0-9]/g, '');
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
      detail: {}
    };

    merchantField.creator = req.body.creator;
    merchantField.owner = req.body.owner;
    merchantField.updated_at = MomentNow;
    merchantField.place = req.body.place;

    if (typeof req.body.businessType !== 'undefined') {
      merchantField.businessType = req.body.businessType;
    }

    if (typeof req.body.businessType !== 'undefined') {
      merchantField.targetType = req.body.targetType;
    }

    if (req.body.phone) merchantField.phone = req.body.phone;

    if (req.body.associates) {
      merchantField.associates = req.body.associates;
    }

    if (req.body.handle) merchantField.handle = req.body.handle;
    if (req.body.pitch) merchantField.detail.pitch = req.body.pitch;
    if (req.body.bio) merchantField.detail.bio = req.body.bio;
    if (req.body.terms) merchantField.detail.terms = req.body.terms;
    if (req.body.privacy) merchantField.detail.privacy = req.body.privacy;
    if (req.body.category) merchantField.category = req.body.category;
    if (req.body.creator) merchantField.creator = req.body.creator;

    if (req.body.logo) merchantField.logo = req.body.logo;

    if (req.body.gallery) merchantField.gallery = req.body.gallery;

    if (req.body.socialMedia) merchantField.socialMedia = req.body.socialMedia;

    if (req.body.personalEmail)
      merchantField.personalEmail = req.body.personalEmail;

    if (req.body.businessEmail)
      merchantField.businessEmail = req.body.businessEmail;

    // check to see if handle exists after merchant update the handle

    Merchant.findOne({ _id: req.body.merchant_id }).then(merchant => {
      if (merchant) {
        // Update
        Merchant.findOneAndUpdate(
          { _id: req.body.merchant_id },
          { $set: merchantField },
          { upsert: true, new: true }
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
          new Merchant(merchantField)
            .save()
            .then(merchant => res.json(merchant));
        });
      }
    });
  }
);

router.post(
  '/addassociate/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Merchant.findOne({ "place.googlePlaceId": req.body.googlePlaceId }).then(
      merchant => {
        if (!merchant) {
          let merchantField = {
            place: req.body,
            handle: Date.now().toString(),
            creator: req.body.merchant_id
          };
          new Merchant(merchantField).save().then(associate => {
            updateAssociate(associate, req, res);
          });
        } else {
          updateAssociate(merchant, req, res);
        }
      }
    );
  }
);

router.post(
  '/removeassociate/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Merchant.findOne({ _id: req.body.merchant_id }).then(merchant => {
      if (merchant) {
        merchant.associates = merchant.associates.filter(
          x => x.merchantId != req.body.id
        );
        merchant.save().then(merchant => {
          bindAssociteInfomation(merchant, res);
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
        Merchant.deleteOne({ _id: req.body.merchant_id })
          .then(merchant => res.json(merchant))
          .catch(err => console.log(err));
      } else {
        return res.status(404).json({ message: 'Merchant not found' });
      }
    });
  }
);

router.get('/:profileid', (req, res) => {
  Merchant.findOne({ owner: req.params.profileid }).then(merchant => {
    if (merchant) {
      bindAssociteInfomation(merchant, res);
    } else {
      return res.status(404).json({ message: 'Merchant not found' });
    }
  });
});

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

router.post(
  '/updateStatus',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Merchant.findOne({ _id: req.body.merchantId }).then(merchantA => {
      if (merchantA) {
        Merchant.findOne({ _id: req.body.associateId }).then(merchantB => {
          if (merchantB) {
            let associateA = merchantA.associates.find(x => x.merchantId === merchantB.id);
            let associateB = merchantB.associates.find(x => x.merchantId === merchantA.id);

            console.log('merchantA', merchantA);
            console.log('merchantB', merchantB);
            console.log('associateA', associateA);
            console.log('associateB', associateB);

            if (associateA && associateB) {
              associateA.connectedStatus = req.body.connectedStatus;
              merchantA.save().then(x => bindAssociteInfomation(x, res));
              console.log(req.body);

              associateB.connectedStatus = getSuitableStatus(req.body.connectedStatus);
              merchantB.save().then(x => {
                if (clients[merchantB.id]) {
                  bindAssociteInfomation(x, null, (merchant) => clients[merchantB.id].emit('updateConnectionStatus', merchant))
                }
                return x;
              });
            }
          }
        })
      }
    })
  }
)

function getSuitableStatus (status) {
  switch (status) {
    case 'received':
      return 'requested';
    case 'accepted':
      return 'accepted';
    case 'rejected':
      return 'denied';
    default :
      return 'received';
  }
}

function bindAssociteInfomation(merchant, res, callback) {
  if (merchant) {
    Merchant.find().then(associates => {
      if (associates && associates.length > 0) {
        for (let i = 0; i < merchant.associates.length; i++) {
          let associate = associates.find(
            x => x.id === merchant.associates[i].merchantId
          );

          if (associate && associate.place) {
            merchant.associates[i] = Object.assign({}, associate.place, {
              category: merchant.associates[i].category,
              id: associate.id,
              connectedStatus: merchant.associates[i].connectedStatus,
              merchantId: merchant.associates[i].merchantId,
              owner: associate.owner
            });
          }
        }
      }

      console.log('callback', callback);
      if (callback && typeof callback === 'function') {
        callback(merchant);
      }

      if (res) {
        return res.json(merchant);
      }

      return null;
    });
  }
}


const addAssociate = (merchantA, merchantB, req, res) => {
  if (merchantA && merchantB) {
    let backupMerchantA = Object.assign({}, merchantA);
    let backupMerchantB = Object.assign({}, merchantB);

    merchantA.associates.push({
      category: req.body.category,
      merchantId: merchantB.id,
      connectedStatus: req.body.connectedStatusA || 'requested'
    });

    let transtionA = merchantA
      .save()
      .then(merchantA => merchantA)
      .catch(error => error);

    merchantB.associates.push({
      category: 'request',
      merchantId: merchantA.id,
      connectedStatus: req.body.connectedStatusB || 'received'
    });

    let transtionB = merchantB
      .save()
      .then(merchantB => merchantB)
      .catch(error => error);

    Promise.all([transtionA, transtionB]).then(
      values => {
        let [merchantA, merchantB] = values
        bindAssociteInfomation(merchantA, res);

        if (clients[merchantB.id]) {
          bindAssociteInfomation(merchantB, null, (merchantB) => clients[merchantB.id].emit('updateConnectionStatus', merchantB))
        }
      },
      error => {
        backupMerchantA.save();
        backupMerchantB.save();
      }
    );
  }
};

const updateAssociate = (associate, req, res) => {
  Merchant.findOne({ _id: req.body.merchant_id }).then(mainMerchant => {
    if (mainMerchant) {
      addAssociate(mainMerchant, associate, req, res);
    } else {
      console.log(req.body.merchant_id);
    }
  });
};

module.exports = {
  router,
  connectSocket: (io) => {
    io.on('connection', (socket) => {
      socket.on('newConnection', (id) => {
        if (id in clients) {

        } else {
          clients[id] = socket;
          console.log('add ' + id);
        }
      });
    });
  }
}
