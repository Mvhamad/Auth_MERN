const User = require('../models/user.model');

// Display all users
module.exports.allUser = async (res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
  }
};
