const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .catch(error => console.error('MongoDB connection error:', error));

module.exports = mongoose;
