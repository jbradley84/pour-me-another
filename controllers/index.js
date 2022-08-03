const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


//ADD OTHER ROUTES WHEN CREAATED

module.exports = router;