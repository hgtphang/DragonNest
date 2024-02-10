const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: { 
    type: String,
    required: true,
    match: /.+@.+..+/,
    unique: true,
  },
  
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        return regex.test(value);
      },
      message: 'Password must have at least 8 characters with at least 1 special character, 1 lowercase letter, and 1 uppercase letter.',
    },
  },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;