const express = require("express");
const router = express.Router();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const AuthController = require("../Controller/auth.controller");
const UserService = require("../Service/UserService");

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (username, password, done) => {
      // User.findOne({ username: username }, function (err, user) {
      //   if (err) {
      //     return done(err);
      //   }
      //   if (!user) {
      //     return done(null, false, { message: "Incorrect username." });
      //   }
      //   if (!user.validPassword(password)) {
      //     return done(null, false, { message: "Incorrect password." });
      //   }
      //   return done(null, user);
      // });
      // Login method here
      const user = await UserService.getUser({ email: username });
      const passwordCheck = await UserService.checkPassword(
        password,
        user.password
      );
      if (!passwordCheck) {
        return done(null, false, { message: "Incorrect password." });
        // return res.json("INVALID PASSWORD OR USER");
      }
      console.log(username, password);
      return done(null, user);
      // res.json(user);
    }
  )
);

router.post("/register", AuthController.register);
router.post("/login", passport.authenticate("local", {session: false}), AuthController.login);

module.exports = router;
