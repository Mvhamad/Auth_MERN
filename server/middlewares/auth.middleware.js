const jwt = require("jsonwebtoken");

module.exports.verifylogin = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded.username; // Store the username in the request for later use
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "invalid token" });
  }
};
