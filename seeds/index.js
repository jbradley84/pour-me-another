const seedUser = require('./User-seed.js');
const seedFavorite = require('./Favorite-seed.js');
const seedBeverage = require('./Beverage-seed.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedBeverage();
  console.log('\n----- Beverage SEEDED -----\n');

  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  await seedFavorite();
  console.log('\n----- Favorite SEEDED -----\n');

  process.exit(0);
};

seedAll();