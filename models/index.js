// import models
const beverages = require('./beverages');
const user = require('./user');
const ratings = require('./ratings');

// user belongsTo beverages
user.belongsTo(beverages, {
  foreignKey: 'user_id'
});
// rating belongsTo beverages
ratings.belongsTo(beverages, {
  foreignKey: 'rating_id'
});
// user belongsTo rating
beverages.belongsTo(ratings, {
  foreignKey: 'beverages_id'
});
// user belongsTo rating
user.belongsTo(ratings, {
  foreignKey: 'user_id'
});

module.exports = {
  beverages,
  user,
  ratings,
};
