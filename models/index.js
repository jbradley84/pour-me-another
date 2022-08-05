// import models
const Beverages = require('./Beverages');
const User = require('./User');
const Ratings = require('./Ratings');

// user belongsTo Beverages
User.belongsTo(Beverages, {
  foreignKey: 'User_id'
});
// rating belongsTo Beverages
Ratings.belongsTo(Beverages, {
  foreignKey: 'Ratings_id'
});
// user belongsTo rating
Beverages.belongsTo(Ratings, {
  foreignKey: 'Beverages_id'
});
// user belongsTo rating
User.belongsTo(Ratings, {
  foreignKey: 'User_id'
});

module.exports = {
  Beverages,
  User,
  Ratings,
};
