const express = require("express");
const router = express.Router();
const passport = require("passport");
const test = require("../Routes/test");
const auth = require("../Routes/auth");

router.use("/test", passport.authenticate("jwt", { session: false }), test);
router.use("/auth", auth);

module.exports = router;
