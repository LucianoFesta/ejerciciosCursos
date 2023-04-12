const { Router } = require('express');
const express = require('express');
const router = express.Router();
const genresControllerAPI = require('../../controllers/Api/genresController');

router.get('/api/genres', genresControllerAPI.list)
router.get('/api/genres/detail/:id', genresControllerAPI.detail);

module.exports = router;