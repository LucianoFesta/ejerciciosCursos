const express = require('express');
const mainControllers = require('../controllers/mainControllers');
const recordarColor = require('../middleware/recordarColor');
const router = express.Router();

router.get('/', mainControllers.index);
router.get('/user', mainControllers.user);
router.post('/', mainControllers.processIndex);

module.exports = router;