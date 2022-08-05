// import models
const Beverages = require('./Beverages');
const user = require('./User');
const ratings = require('./Ratings');

// user belongsTo Beverages
user.belongsTo(Beverages, {
  foreignKey: 'User_id'
});
// rating belongsTo Beverages
ratings.belongsTo(Beverages, {
  foreignKey: 'Rating_id'
});
// user belongsTo rating
Beverages.belongsTo(ratings, {
  foreignKey: 'Beverages_id'
});
// user belongsTo rating
user.belongsTo(ratings, {
  foreignKey: 'User_id'
});

module.exports = {
  Beverages,
  User,
  ratings,
};
