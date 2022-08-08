const { Favorite } = require('../models');

const FavoriteData = [
    {
        user_id: 1,
        beverage_id: 1
    },
    {
        user_id: 2,
        beverage_id: 2
    },
    {
        user_id: 3,
        beverage_id: 3
    },
    {
        user_id: 4,
        beverage_id: 4
    },
    {
        user_id: 5,
        beverage_id: 5
    },
    {
        user_id: 6,
        beverage_id: 6
    },
  ];

  const seedFavorite = () => Favorite.bulkCreate(FavoriteData);

  module.exports = seedFavorite;