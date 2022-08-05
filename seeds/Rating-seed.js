const { Rating } = require('../models');

const RatingData = [
    {
        rate: '7.9',
        user_id:'1',
        beverage_id:'6'
    },
    {
        rate: '9.4',
        user_id:'1',
        beverage_id:'1'
    },
    {
        rate: '8.7',
        user_id:'1',
        beverage_id:'2'
    },
    {
        rate: '8.5',
        user_id:'1',
        beverage_id:'3'
    },
    {
        rate: '8.3',
        user_id:'1',
        beverage_id:'4'
    },
    {
        rate: '8.0',
        user_id:'1',
        beverage_id:'5'
    },
  ];
  
  const seedRating = () => Rating.bulkCreate(RatingData);
  
  module.exports = seedRating;
  