const express = require('express');
const router = express.Router();
const controllersMovieAPI = require('../../controllers/Api/moviesController');

router.post('/movies/api/create', controllersMovieAPI.movieCreate);
router.delete('/movies/api/delete/:id', controllersMovieAPI.movieDelete);

module.exports = router;