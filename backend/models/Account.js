const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Creating a Schema for your nest
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
    match: /.+\@.+\..+/,
    unique: true,
  },
  
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Use regular expressions to check for password complexity
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(value);
      },
      message: 'Password must have at least 8 characters with at least 1 special character, 1 lowercase letter, and 1 uppercase letter.',
    },
  },
});
  // Pre-save hook to handle password hashing
accountSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  // Hash the password with a salt round of 10
  this.password = await bcrypt.hash(this.password, 10);
  next();
});



const Account = mongoose.model('Account', accountSchema);

module.exports = Account;