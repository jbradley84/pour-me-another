const router = require('express').Router();
const sequelize = require('../config/connection');
const { Beverage, User, Favorite } = require('../models');
const withAuth = require('../utils/auth');

// get list of all beverages favorited by session user
router.get('/', withAuth, (req, res) => {
   Beverage.findAll({
      where: {
         // favorite.user_id = session user id
      },
      attributes: [
         'id',
         'beverage_name',
         'beverage_type',
         [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE beverage.id = favorite.beverage_id)'), 'favorite_count']
      ]
   })
      .then(dbBeverageData => {
         console.log(dbBeverageData);
         const beverages = dbBeverageData.map(beverage => beverage.get({ plain: true }));
         console.log(beverages);
         res.render('mybar', { beverages, loggedIn: true });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;


