const router = require('express').Router();
const sequelize = require('../config/connection');
const { Beverage, User, Favorite } = require('../models');
const withAuth = require('../utils/auth');



// get list of all beverages favorited by session user

router.get('/', withAuth, (req, res) => {
   const userId = req.session.user_id;
   console.log(userId);
   Favorite.findAll({
      where: {
         user_id: userId
      },
      include: [
         {
            model: Beverage,
            attributes: ['beverage_name'],
            through: Favorite,
            as: 'favorite_beverage'
         }
      ]
   })
      .then(dbFavoriteData => {
         console.log(dbFavoriteData);
         const favorites = dbFavoriteData.map(favorite => favorite.get({ plain: true }));
         console.log(favorites);
         res.render('mybar', { favorites, loggedIn: true });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;


