const router = require('express').Router();
const multer = require('multer');
let path = require('path');

const authUser = require('../middlewares/auth-user');
const { getMovies, getMovie } = require('../controllers/movies/moviesController');
const { signup } = require('../controllers/users/signup');
const { login, changePassword } = require('../controllers/users/authController');
const { getProfile } = require('../controllers/users/profileController');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/profile-images/');
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}${path.extname(file.originalname)}`);
    }
});
const uploadImage = multer({ storage });
const upload = multer();

router.get('/get-movies', getMovies);
router.get('/get-movie/:id', getMovie);
router.post('/signup', [ uploadImage.single('image') ], signup);
router.put('/change-password', [ authUser, upload.array() ], changePassword);
router.post('/login', [ upload.array() ], login);
router.get('/get-profile', [ authUser ], getProfile);

module.exports = router;