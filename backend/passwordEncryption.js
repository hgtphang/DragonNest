const bcrypt = require('bcryptjs');

// Sample dataset to store user information
let users = [];

// Function to add a new user with hashed password to the dataset
function addUser(username, password) {
    // Generate salt and hash the password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store the username and hashed password in the dataset
            users.push({ username: username, passwordHash: hash });
            console.log("User added successfully.");
        });
    });
}

// Example usage:
// addUser('user1', 'password123');
// addUser('user2', 'qwerty456');

console.log(users); // Display the dataset with hashed passwords
