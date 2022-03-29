const router = require('express').Router();
const bp = require('body-parser');
const { addMovie } = require('../controllers/movies/moviesController');
const { addScreen, editScreen } = require('../controllers/theater/screenController');

router.post('/add-movie', bp.json(), addMovie);
router.post('/add-screen', bp.json(), addScreen);
router.put('/edit-screen/:id', bp.json(), editScreen);

module.exports = router; 