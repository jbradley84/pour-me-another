const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const beverageRoutes = require('./beverage-routes');
const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
router.use('/beverages', beverageRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;