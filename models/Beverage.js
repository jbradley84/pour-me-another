const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Beverage extends Model {
  static like(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.beverage_id
    }).then(() => {
      return Beverage.findOne({
        where: {
          id: body.beverage_id
        },
        attributes: [
          'id',
          'beverage_name',
          'beverage_type',
          [sequelize.literal('(SELECT COUNT(*) FROM like WHERE beverage.id = like.beverage_id)'), 'like_count']
        ]
      });
    });
  }
}

// create fields/columns for Post model
Beverage.init(
  {
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
   beverage_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Beverage;