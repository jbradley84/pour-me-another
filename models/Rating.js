const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rate: {
      type: DataTypes.STRING,
      allowNull: false
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
        model: 'Beverage',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Rating',
  }
);

module.exports = Rating;