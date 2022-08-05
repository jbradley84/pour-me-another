const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Beverage, Rating } = require('../../models');


// GET all beverages
router.get('/', (req, res) => {
   Beverage.findAll({
       attributes: [
           'id',
           'beverage_name',
           'beverage_type',
           [sequelize.literal('(SELECT COUNT(*) FROM rating WHERE beverage.id = rating.beverage_id)'), 'rating_count'],
           //[sequelize.literal('(SELECT AVG(*) FROM rating WHERE beverage.id = rating.beverage_)id)'), 'rating_avg']
       ],
      //  include: [
      //    {
      //       model: User,
      //       attributes: ['username']
      //    }
      //  ],
        //order all beverages by average rating, highest to lowest
        //order: [
            //[sequelize.literal('rating_avg'), 'DESC']
        //]
   })
       .then(dbBeverageData => res.json(dbBeverageData))
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       });
});

// GET single beverage by ID
router.get('/:id', (req, res) => {
   Beverage.findOne({
       where: {
           id: req.params.id
       },
       attributes: [
           'id',
           'beverage_name',
           'beverage_type',
           [sequelize.literal('(SELECT COUNT(*) FROM rating WHERE beverage.id = rating.beverage_id)'), 'rating_count'],
           //[sequelize.literal('(SELECT AVG(*) FROM rating WHERE beverage.id = rating.beverage_)id)'), 'rating_avg']
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

// POST (create) new beverage
router.post('/', (req, res) => {
   if (req.session) {
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
   }
});

// PUT (update) single beverage's rating
router.put('/rateMe', (req, res) => {
   // custom static method created in models/Beverage.js
   if (req.session) {
       Beverage.rateMe({ ...req.body, user_id: req.session.user_id }, { Rating, User })
           .then(updatedRatingData => res.json(updatedRatingData))
           .catch(err => {
               console.log(err);
               res.status(500).json(err);
           });
   }
});

module.exports = router;