const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const UserService = require("../Service/UserService");

const localOptions = { usernameField: "email", passwordField: "password" };
const usernameLogin = async (username, password, done) => {
  const user = await UserService.getUser({ email: username });
  const passwordCheck = await UserService.checkPassword(
    password,
    user.password
  );
  if (!passwordCheck) {
    return done("Incorrect password.");
  }
  return done(null, user);
};

exports.local = new LocalStrategy(localOptions, usernameLogin);
