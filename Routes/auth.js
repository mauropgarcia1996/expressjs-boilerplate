const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthController = require("../Controller/auth.controller");

router.post("/register", AuthController.register);
router.post("/login", passport.authenticate("local", {session: false}), AuthController.login);

module.exports = router;
