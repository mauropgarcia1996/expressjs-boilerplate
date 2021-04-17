const express = require('express');
const router = express.Router();

const TestController = require('../controller/test.controller')

router.get('/message', TestController.read);
router.post('/message', TestController.create)
router.put('/message', TestController.update)
router.patch('/message', TestController.patch)
router.delete('/message', TestController.delete)

module.exports = router;