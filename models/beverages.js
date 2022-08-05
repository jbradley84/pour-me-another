// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize breverages model (table) by extending off Sequelize's Model class
class beverages extends Model { }

// set up fields and rules for breverages model
beverages.init(
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
        model: 'user',
        key: 'id'
      }
    },
    rating_id: {
      type: DataTypes.DECIMAL,
    references: {
      model: 'drinkCategory',
      key: 'id'
    }}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'beverages',
  }
);

module.exports = beverages;
