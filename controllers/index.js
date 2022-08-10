const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const mybarRoutes = require('./mybar-routes.js');

router.use('/', homeRoutes);
router.use('/mybar', mybarRoutes);
router.use('/api', apiRoutes);

module.exports = router;