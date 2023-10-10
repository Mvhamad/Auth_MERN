const express = require("express");
const router = express.Router();
const AuthControllers = require("../controllers/auth.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const UserControllers = require("../controllers/user.controller");

// ------------------Auth Routes
router.post("/signup", AuthControllers.signup);
router.post("/login", AuthControllers.login);
// Protected route that requires successful login
router.get("/protect", AuthMiddleware.verifylogin, async (req, res) => {
  // The username is available in req.user due to the middleware
  return res.status(200).json({ message: "Access granted.", user: req.user });
});

// ------------------Crud Routes
router.get("/", UserControllers.allUser);

module.exports = router;
