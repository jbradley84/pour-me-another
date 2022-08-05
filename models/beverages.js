// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize breverages model (table) by extending off Sequelize's Model class
class Beverages extends Model {   
   static rateMe(body, models) {
  return models.Rating.create({
      user_id: body.user_id,
      beverage_id: body.beverage_id
  })
  .then(() => {
      return Beverage.findOne({
          where: {
              id: body.beverage_id
          },
          attributes: [
              'id',
              'beverage_name',
              'beverage_type',
              [sequelize.literal('(SELECT COUNT(*) FROM rating WHERE beverage.id = rating.beverage_id)'), 'rating_count'],
              [sequelize.literal('(SELECT AVG(*) FROM rating WHERE beverage.id = rating.beverage_)id)'), 'rating_avg']
          ]
      });
  });
}}

// set up fields and rules for breverages model
Beverages.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    beverage_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    rating_id: {
      type: DataTypes.DECIMAL,
    references: {
      model: 'Ratings',
      key: 'id'
    }}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Beverages',
  }
);

module.exports = Beverages;
