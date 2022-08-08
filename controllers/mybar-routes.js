const router = require('express').Router();
const sequelize = require('../config/connection');
const { Beverage, User, Favorite } = require('../models');
const withAuth = require('../utils/auth');

// get session user data including favorited beverages for My Bar list
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  User.findOne({
   attributes: { exclude: ['password'] },
   // where: {
   //   id: req.params.id
   // },
   include: [
     {
       model: Beverage,
       attributes: ['beverage_name'],
       through: Favorite,
       as: 'favorite_beverage'
     }
   ]
})
.then(dbUserData => {
   console.log(dbUserData);
  const beverages = dbUserData.map(beverage => beverage.get({ plain: true }));
  console.log(beverages);
  res.render('mybar', { beverages, loggedIn: true });
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

module.exports = router;

