const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const SecretToken = require("../utils/SecretToken");

// Register or sign up a new account
module.exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ username: username });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password
    const saltRounds = 12;
    const passwordHashed = await bcrypt.hash(password, saltRounds);
    //registration process
    const user = new User({
      username: username,
      email: email,
      password: passwordHashed,
    });
    await user.save();
    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Authentication or login
module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Incorrect username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect username or password" });
    }

    const token = SecretToken.createSecretToken(user.username);
    return res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred during login" });
  }
};
