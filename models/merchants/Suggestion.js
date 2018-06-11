const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const SuggestionSchema = new Schema({
  googlePlaceId: {
    type: String,
    required: true
  },
  targeted: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'profiles'
  }
});

module.exports = Suggestion = mongoose.model('suggestion', SuggestionSchema);
