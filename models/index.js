// import all models
const Beverage = require('./Beverage');
const User = require('./User');
const Favorite = require('./Favorite');

// create associations
User.hasMany(Beverage, {
  foreignKey: 'user_id'
});

Beverage.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Beverage, {
  through: Favorite,
  as: 'favorite_beverage',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Beverage.belongsToMany(User, {
  through: Favorite,
  as: 'favorite_beverage',
  foreignKey: 'beverage_id',
  onDelete: 'SET NULL'
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Favorite.belongsTo(Beverage, {
  foreignKey: 'beverage_id',
  onDelete: 'SET NULL'
});

User.hasMany(Favorite, {
  foreignKey: 'user_id'
});

Beverage.hasMany(Favorite, {
  foreignKey: 'beverage_id'
});


module.exports = { User, Beverage, Favorite };
