require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (username) => {
  try {
    if (!process.env.TOKEN_KEY) {
      throw new Error("TOKEN_KEY environment variable is not set.");
    }
    return jwt.sign({ username }, process.env.TOKEN_KEY, {
      expiresIn: "3d", // Using a more human-readable time format
    });
  } catch (error) {
    console.error("Error creating secret token:", error.message);
    return null; // Return null or handle the error according to your use case
  }
};

// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.createSecretToken =(username)=> {
//     return jwt.sign({username}, process.env.TOKEN_KEY, {
//         expiresIn: 3 * 24 * 60 * 60,
//     });
// };