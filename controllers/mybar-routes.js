const router = require('express').Router();
const sequelize = require('../config/connection');
const { Beverage, User, Review, Favorite } = require('../models');
const withAuth = require('../utils/auth');

// get all beverages for mybar
router.get('/', withAuth, (req, res) => {
   console.log(req.session);
   Beverage.findAll({
      where: {
         user_id: req.session.user_id
      },
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
         res.render('mybar', { beverages, loggedIn: true });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;


