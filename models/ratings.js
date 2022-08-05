const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Ratings extends Model {}

Ratings.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    beverage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Beverages',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Ratings',
  }
);

module.exports = Ratings;
