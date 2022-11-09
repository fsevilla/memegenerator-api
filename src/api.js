const router = require('express').Router();

const userRoutes = require('./users/routes');
const memeRoutes = require('./memes/routes');

router.use('/users', userRoutes);
router.use('/memes', memeRoutes);

module.exports = router;