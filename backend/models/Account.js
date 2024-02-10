const mongoose = require('mongoose');

<<<<<<< HEAD

// Creating a Schema for your nest
=======
>>>>>>> bda029ef13591de6abae3a5390ee84cc447e6973
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
<<<<<<< HEAD
  },
  email: { 
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
=======
>>>>>>> bda029ef13591de6abae3a5390ee84cc447e6973
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
<<<<<<< HEAD
        // Use regular expressions to check for password complexity
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
=======
        const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
>>>>>>> bda029ef13591de6abae3a5390ee84cc447e6973
        return regex.test(value);
      },
      message: 'Password must have at least 8 characters with at least 1 special character, 1 lowercase letter, and 1 uppercase letter.',
    },
  },
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;