const seedBeverage = require('./Beverage-seed.js');
const seedUser = require('./User-seed.js');
const seedRating = require('./Rating-seed.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBeverage();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedUser();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedRating();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
