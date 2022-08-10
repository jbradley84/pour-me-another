const seedUsers = require('./user-seeds');
const seedBeverages = require('./beverage-seeds');
const seedReviews = require('./review-seeds');
const seedFavorites = require('./favorite-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedBeverages();
  console.log('--------------');

  await seedReviews();
  console.log('--------------');

  await seedFavorites();
  console.log('--------------');

  process.exit(0);
};

seedAll();