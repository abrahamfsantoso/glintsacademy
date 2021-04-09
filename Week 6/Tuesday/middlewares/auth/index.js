const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const { user } = require("../../models");

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        let userSignUp = await user.create(req.body);
        return done(null, userSignUp, {
          message: "User can be created",
        });
      } catch (e) {
        return done(null, false, {
          message: "User can't be created",
        });
      }
    }
  )
);

passport.use(
  "signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        let userSignIn = await user.findOne({ email });

        if (!userSignIn) {
          return done(null, false, {
            message: "Email not found",
          });
        }

        let validate = await bcrypt.compare(password, userSignIn.password);

        if (!validate) {
          return done(null, false, {
            message: "Wrong password",
          });
        }

        return done(null, userSignIn, {
          message: "User can sign in",
        });
      } catch (e) {
        return done(null, false, {
          message: "User can't be created",
        });
      }
    }
  )
);

module.exports.admin = (req, res, next) => {
  // It will go to ../middlewares/auth/index.js -> passport.use("signup")
  passport.authorize("admin", (err, user, info) => {
    // After go to ../middlewares/auth/index.js -> passport.use("signup")
    // It will bring the variable from done() function
    // Like err = null, user = false, info = { message: "User can't be creted" }
    // Or err = null, user = userSignUp, info = { message: "User can be creted" }

    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If user is false
    if (!user) {
      return res.status(403).json({
        message: info.message,
      });
    }

    // Make req.user that will be save the user value
    // And it will bring to controller
    req.user = user;

    // Next to authController.getToken
    next();
  })(req, res, next);
};

passport.use(
  "admin",
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    
    async (token, done) => {
      const userLogin = await user.findOne({
        _id: token.id,
      });
      
      if (userLogin.role.includes("admin")) {
        return done(null, token);
      }
      return done(null, false, {
        message: "You're not authorized",
      });
    }
  )
);

module.exports.user = (req, res, next) => {
  // It will go to ../middlewares/auth/index.js -> passport.use("signup")
  passport.authorize("user", (err, user, info) => {
    // After go to ../middlewares/auth/index.js -> passport.use("signup")
    // It will bring the variable from done() function
    // Like err = null, user = false, info = { message: "User can't be creted" }
    // Or err = null, user = userSignUp, info = { message: "User can be creted" }

    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If user is false
    if (!user) {
      return res.status(403).json({
        message: info.message,
      });
    }

    // Make req.user that will be save the user value
    // And it will bring to controller
    req.user = user;

    // Next to authController.getToken
    next();
  })(req, res, next);
};

passport.use(
  'user',
  new JWTstrategy({
      secretOrKey: process.env.JWT_SECRET, 
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      const userSignin = await user.findOne({
        email: token.email
      })

      if (userSignIn.role.includes('user')) {
        return done(null, token)
      }

      return done(null, false)
    }
  )
)
