// Importing Mongoose
const mongoose = require('mongoose');

// Creating a Schema for your nest
const nestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true
    // should not overlap any existent username
  },
  // email? (should not overlap any existent email)
  password: {
    type: String,
    required: true,
    trim: true,
    // password must have at least 1 special char, 1 uppercase and 1 lowercase, 
    // and be at least 8 char long
    match: [/^\d{5}(-\d{4})?$/, 'Your password does not meet all requirements.']
  },
});

// Creating the model from the schema
const Nest = mongoose.model('Account', nestSchema);

module.exports = Account;