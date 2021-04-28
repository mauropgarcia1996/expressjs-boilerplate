const express = require("express");
const passport = require("passport");
const api = require("../api");
const strategies = require("./passport")

const app = express();

app.use(passport.initialize());
passport.use('local', strategies.local);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

module.exports = app