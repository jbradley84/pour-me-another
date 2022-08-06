const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}
Favorite.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      //allowNull: false,
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
        model: 'beverage',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Favorite',
  }
);

module.exports = Favorite;