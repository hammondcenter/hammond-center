const User = require('../models/user');

async function createNewUser(userObject) {
  try {
    const newUser = new User(userObject);
    const savedUser = await newUser.save();
    //console.log('User created:', savedUser);
  } catch (error) {
    console.error('Error creating new user:', error);
  }
}

async function validateUser(email, password) {
    try {
        // Find a user with the provided email in the database
        const user = await User.findOne({ email });
    
        if (!user) {
          // User with the provided email does not exist
          return null;
        }
    
        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await user.comparePassword(password);
    
        if (!isPasswordValid) {
          // Password does not match
          return null;
        }
    
        // If both email and password are valid, return the user object
        return user;
      } catch (error) {
        console.error('Error validating user:', error);
        throw error; // You can handle this error according to your application's needs
      }

}

module.exports = { createNewUser, validateUser };