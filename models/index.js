// import models
const Beverage = require('./Beverage');
const User = require('./User');
const Favorite = require('./Favorite');

// A user can create many beverages
User.hasMany(Beverage, {
  foreignKey: 'user_id'
});

// A beverage is created by a single user
Beverage.belongsTo(User, {
   foreignKey: 'user_id'
});

// A user can be linked to many beverages by rating them 
User.belongsToMany(Beverage, {
   through: Favorite,
   as: 'favorite_beverages',
   foreignKey: 'user_id'
});

// A beverage can be linked any user that rates it
Beverage.belongsToMany(User, {
   through: Favorite,
   as: 'favorite_beverages',
   foreignKey: 'beverage_id'
});

// A rating is created by a single user
Favorite.belongsTo(User, {
   foreignKey: 'user_id'
});

// A rating is created for a single beverage
Favorite.belongsTo(Beverage, {
   foreignKey: 'beverage_id'
});

// A user can rate multiple beverages
User.hasMany(Favorite, {
   foreignKey: 'user_id'
});

// A beverage can be rated multiple times
Beverage.hasMany(Favorite, {
   foreignKey: 'beverage_id'
});

module.exports = { Beverage, User, Favorite };
