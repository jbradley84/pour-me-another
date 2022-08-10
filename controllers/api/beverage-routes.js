const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Beverage, User, Review, Favorite } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
   Beverage.findAll({
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
      .then(dbBeverageData => res.json(dbBeverageData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
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
         res.json(dbBeverageData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
   // expects {beverage_name: 'Purple Haze', beverage_type: 'Beer', user_id: 1}
   Beverage.create({
      beverage_name: req.body.beverage_name,
      beverage_type: req.body.beverage_type,
      user_id: req.session.user_id
   })
      .then(dbBeverageData => res.json(dbBeverageData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.put('/favorite', withAuth, (req, res) => {
   // custom static method created in models/Beverage.js
   Beverage.favorite({ ...req.body, user_id: req.session.user_id }, { Favorite, Review, User })
      .then(updatedFavoriteData => res.json(updatedFavoriteData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.put('/:id', withAuth, (req, res) => {
   Beverage.update(
      {
         beverage_name: req.body.beverage_name
      },
      {
         where: {
            id: req.params.id
         }
      }
   )
      .then(dbBeverageData => {
         if (!dbBeverageData) {
            res.status(404).json({ message: 'No beverage found with this id' });
            return;
         }
         res.json(dbBeverageData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.delete('/:id', withAuth, (req, res) => {
   console.log('id', req.params.id);
   Beverage.destroy({
      where: {
         id: req.params.id
      }
   })
      .then(dbBeverageData => {
         if (!dbBeverageData) {
            res.status(404).json({ message: 'No beverage found with this id' });
            return;
         }
         res.json(dbBeverageData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;