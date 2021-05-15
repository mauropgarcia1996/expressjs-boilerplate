const LocalStrategy = require("passport-local").Strategy;

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const UserService = require("../Service/UserService");

const localOptions = { usernameField: "email", passwordField: "password" };
const usernameLogin = async (username, password, done) => {
  const user = await UserService.getUser({ email: username });
  if (!user) {
    return done("Incorrect email.");
  }
  const passwordCheck = await UserService.checkPassword(password, user.password);
  if (!passwordCheck) {
    return done("Incorrect password.");
  }
  return done(null, user);
};

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  issuer: process.env.JWT_ISSUER,
  audience: process.env.JWT_AUDIENCE,
};
const jwtLogin = async (jwt_payload, done) => {
  done(null, jwt_payload)
};

exports.local = new LocalStrategy(localOptions, usernameLogin);
exports.jwt = new JwtStrategy(jwtOptions, jwtLogin);
