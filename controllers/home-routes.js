const sequelize = require('../config/connection');
const { Beverage, User, Favorite } = require('../models');
const router = require('express').Router();

// renders homepage
router.get('/', (req, res) => {
   Beverage.findAll({
      attributes: [
         'id',
         'beverage_name',
         'beverage_type',
         [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE beverage.id = favorite.beverage_id)'), 'favorite_count']
      ]
   })
   .then(dbBeverageData => {
      const beverages = dbBeverageData.map(beverage => beverage.get({ plain: true }));
      const loggedIn = req.session.loggedIn ? req.session.loggedIn: false
      res.render('homepage', { beverages, loggedIn });
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// renders individual beverage page
router.get('/beverage/:id', (req, res) => {
   console.log(req.params);
   Beverage.findOne({
      where: {
         id: req.params.id
      },
      attributes: [
         'id',
         'beverage_name',
         'beverage_type',
         [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE beverage.id = favorite.beverage_id)'), 'favorite_count']
      ]
   })
   .then(dbBeverageData => {
      if (!dbBeverageData) {
         res.status(404).json({ message: 'No beverage found with this id!' });
         return;
      }
      const beverage = dbBeverageData.get({ plain: true });
      console.log(beverage);
      res.render('single-beverage', { beverage });
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

//renders my bar
router.get('/mybar', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/');
      return;
   }

   res.render('mybar');
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