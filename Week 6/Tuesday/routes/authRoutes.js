const express = require("express");
const passport = require("passport");

// Import validator
const authValidator = require("../middlewares/validators/authValidator");
// Import controller
const authController = require("../controllers/authController");

// Import auth (middleware)
const auth = require("../middlewares/auth");

const router = express.Router();

router.post(
  "/signup",
  authValidator.signup,
  async (req, res, next) => {
    passport.authenticate("signup", { session: false }, (err, user, info) => {
      // if error

      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }

      if (!user) {
        return res.status(401).json({
          status: "Error",
          message: info.message,
        });
      }

      req.user = user;

      next();
    })(req, res, next);
  },
  authController.getToken
);

router.post(
  "/signin", authValidator.signin, 
  async (req, res, next) => {
    passport.authenticate("signin", { session: false }, (err, user, info) => {
      // if error

      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }

      if (!user) {
        return res.status(401).json({
          status: "Error",
          message: info.message,
        });
      }

      req.user = user;

      next();
    })(req, res, next);
  },
  authController.getToken
);



module.exports = router;
