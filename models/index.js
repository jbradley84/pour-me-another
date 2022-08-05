// import models
const Beverage = require('./Beverage');
const User = require('./User');
const Rating = require('./Rating');

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
   through: Rating,
   as: 'rated_beverages',
   foreignKey: 'user_id'
});

// A beverage can be linked any user that rates it
Beverage.belongsToMany(User, {
   through: Rating,
   as: 'rated_beverages',
   foreignKey: 'beverage_id'
});

// A rating is created by a single user
Rating.belongsTo(User, {
   foreignKey: 'user_id'
});

// A rating is created for a single beverage
Rating.belongsTo(Beverage, {
   foreignKey: 'beverage_id'
});

// A user can rate multiple beverages
User.hasMany(Rating, {
   foreignKey: 'user_id'
});

// A beverage can be rated multiple times
Beverage.hasMany(Rating, {
   foreignKey: 'beverage_id'
});




// rating belongsTo Beverages
// Rating.belongsTo(Beverage, {
//   foreignKey: 'Rating_id'
// });

// user belongsTo rating
// Beverage.belongsTo(Rating, {
//   foreignKey: 'Beverage_id'
// });

// user belongsTo rating
// User.belongsTo(Rating, {
//   foreignKey: 'User_id'
// });

module.exports = { Beverage, User, Rating };
