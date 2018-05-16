const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  dob: {
    type: Date
  },
  phone: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});

module.exports = User = mongoose.model('users', UserSchema);


// export const logoutUser = () => dispatch => {
//   // remove token from localStorage
//   localStorage.removeItem('jwtToken');
// }
