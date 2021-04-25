const express = require('express');
const router = express.Router();
const test = require('./Routes/test');
const auth = require('./Routes/auth');

router.use('/test', test);
router.use('/auth', auth);

module.exports = router;