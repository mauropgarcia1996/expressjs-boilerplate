const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthController = require("../Controller/auth.controller");

router.post("/register", AuthController.register);
router.post("/login", passport.authenticate("local"), AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/check", AuthController.checkAuth);

module.exports = router;
