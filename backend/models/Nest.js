// Importing Mongoose
const mongoose = require('mongoose');

// Creating a Schema for your nest
const nestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  zipcode: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{5}(-\d{4})?$/, 'Please fill a valid zipcode']
  },
  price: {
    type: Number,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  available: {
    type: Boolean,
    default: true
  },
  amenities: [String],
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Add other fields as necessary
});

// Creating the model from the schema
const Nest = mongoose.model('Nest', nestSchema);

module.exports = Nest;