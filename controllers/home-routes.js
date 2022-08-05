const sequelize = require('../config/connection');
const { Beverage, User, Rating } = require('../models');
const router = require('express').Router();

// renders homepage
router.get('/', (req, res) => {
   Beverage.findAll({
      attributes: [
         'id',
         'beverage_name',
         'beverage_type',
         [sequelize.literal('(SELECT COUNT(*) FROM rating WHERE beverage.id = rating.beverage_id)'), 'rating_count'],
         [sequelize.literal('(SELECT AVG(*) FROM rating WHERE beverage.id = rating.beverage_)id)'), 'rating_avg']
      ]
   })
   .then(dbBeverageData => {
      const beverages = dbBeverageData.map(beverage => beverage.get({ plain: true }));
      res.render('homepage', { beverages });
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

//renders login page
router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/');
      return;
   }

   res.render('login');
});

//renders sign page
router.get('/signup', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/');
      return;
   }

   res.render('signup');
});


module.exports = router;