const router = require('express').Router();
const sequelize = require('../config/connection');
const { Beverage, User, Review, Favorite } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
   Beverage.findAll({
      attributes: [
         'id',
         'beverage_name',
         'beverage_type',
         [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE beverage.id = favorite.beverage_id)'), 'favorite_count']
      ],
      // order: [
      //    ['favorite_count', 'DESC']
      // ],
      include: [
         {
            model: Review,
            attributes: ['id', 'review_text', 'beverage_id', 'user_id'],
            include: {
               model: User,
               attributes: ['username']
            }
         },
         {
            model: User,
            attributes: ['username']
         }
      ]
   })
      .then(dbBeverageData => {
         const beverages = dbBeverageData.map(beverage => beverage.get({ plain: true }));

         res.render('homepage', {
            beverages,
            loggedIn: req.session.loggedIn
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// get single beverage
router.get('/beverages/:id', (req, res) => {
   Beverage.findOne({
      where: {
         id: req.params.id
      },
      attributes: [
         'id',
         'beverage_name',
         'beverage_type',
         [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE beverage.id = favorite.beverage_id)'), 'favorite_count']
      ],
      include: [
         {
            model: Review,
            attributes: ['id', 'review_text', 'beverage_id', 'user_id'],
            include: {
               model: User,
               attributes: ['username']
            }
         },
         {
            model: User,
            attributes: ['username']
         }
      ]
   })
      .then(dbBeverageData => {
         if (!dbBeverageData) {
            res.status(404).json({ message: 'No beverage found with this id' });
            return;
         }

         const beverage = dbBeverageData.get({ plain: true });

         res.render('single-beverage', {
            beverage,
            loggedIn: req.session.loggedIn
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/');
      return;
   }

   res.render('login');
});

router.get('/signup', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/');
      return;
   }

   res.render('signup');
});

module.exports = router;