const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const router = express.Router();

router.get('/', productsControllers.sendAll);

router.get('/create', productsControllers.createProducts);

router.get('/:id', productsControllers.sendById);


module.exports = router;