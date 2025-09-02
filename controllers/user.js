const bcrypt = require("bcrypt");

const User = require("../models/user");

const login = async (email, password) => {};

const signup = async (name, email, password) => {
  // check if the email provided is already exist
  const emailExists = await User.findOne({ email: email });
  // if email exists, throw an error
  if (emailExists) {
    throw new Error(
      "Email already exists. Please use another email or login with your existing email."
    );
  }
  // create the new user
  const newUser = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  // save the user
  await newUser.save();
  // return the user data
  return newUser;
};

module.exports = {
  login,
  signup,
};
