const express = require("express");
const passport = require("passport");
var session = require("express-session"),
  bodyParser = require("body-parser");
const api = require("./api");
const strategies = require("./passport");

const app = express();

app.use(session({ secret: "secret" }));
app.use(passport.initialize());
app.use(passport.session());
passport.use("local", strategies.local);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  done(null, id);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

module.exports = app;
