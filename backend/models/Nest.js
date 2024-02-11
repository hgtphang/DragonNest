// Importing Mongoose
const mongoose = require('mongoose');

// Landlord's information includes:
const contactSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10,15}$/, 'Please fill a valid phone number'] 
  },
  email: { 
    type: String,
    required: true,
    match: /.+\@.+\..+/
  },
});

// Creating a Schema for your nest
const nestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
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
  contact: contactSchema,
  price: {
    type: Number,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  bedType: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
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

});

// Creating the model from the schema
const Nest = mongoose.model('Nest', nestSchema);

module.exports = Nest;