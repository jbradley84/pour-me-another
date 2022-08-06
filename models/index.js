// import models
const Beverage = require('./Beverage');
const User = require('./User');
const Favorite = require('./Favorite');

// A user can create many beverages
User.hasMany(Beverage, {
  foreignKey: 'user_id',
  constraints:false,
});

// A beverage is created by a single user
Beverage.belongsTo(User, {
   foreignKey: 'user_id',
   constraints:false,
});

// // A user can be linked to many beverages by rating them 
// User.belongsToMany(Beverage, {
//    through: Rating,
//    as: 'rated_beverages',
//    foreignKey: 'user_id',
//    constraints:false,
// });

// // A beverage can be linked any user that rates it
// Beverage.belongsToMany(User, {
//    through: Rating,
//    as: 'rated_beverages',
//    foreignKey: 'beverage_id',
//    constraints:false,
// });

// A Favorite is created by a single user
Favorite.belongsTo(User, {
   foreignKey: 'user_id',
   constraints:false,
});

// A Favorite is created for a single beverage
Favorite.belongsTo(Beverage, {
   foreignKey: 'beverage_id',
   constraints:false,
});

// A user can rate multiple beverages
User.hasMany(Favorite, {
   foreignKey: 'user_id',
   constraints:false,
});

// A beverage can be rated multiple times
Beverage.hasMany(Favorite, {
   foreignKey: 'beverage_id',
   constraints:false,
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

module.exports = { Beverage, User, Favorite };