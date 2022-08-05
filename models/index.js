// import models
const Beverage = require('./Beverage');
const User = require('./User');
const Rating = require('./Rating');

// user belongsTo Beverages
User.belongsTo(Beverage, {
  foreignKey: 'User_id'
});
// rating belongsTo Beverages
Rating.belongsTo(Beverage, {
  foreignKey: 'Rating_id'
});
// user belongsTo rating
Beverage.belongsTo(Rating, {
  foreignKey: 'Beverage_id'
});
// user belongsTo rating
User.belongsTo(Rating, {
  foreignKey: 'User_id'
});

module.exports = {
  Beverage,
  User,
  Rating,
};
