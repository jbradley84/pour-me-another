const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const mybarRoutes = require('./mybar-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/mybar', mybarRoutes);

module.exports = router;