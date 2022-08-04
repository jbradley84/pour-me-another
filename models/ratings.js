const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ratings extends Model {}

ratings.init(
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
        model: 'user',
        key: 'id'
      }
    },
    beverage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'beverages',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ratings',
  }
);

module.exports = ratings;
