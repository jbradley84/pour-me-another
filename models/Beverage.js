const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Beverage model
class Beverage extends Model {
  static favorite(body, models) {
    return models.Favorite.create({
      user_id: body.user_id,
      beverage_id: body.beverage_id
    }).then(() => {
      return Beverage.findOne({
        where: {
          id: body.beverage_id
        },
        attributes: [
         'id',
         'beverage_name',
         'beverage_type',
         [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE beverage.id = favorite.beverage_id)'), 'favorite_count']
        ],
      //   include: [
      //     {
      //       model: models.Comment,
      //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      //       include: {
      //         model: models.User,
      //         attributes: ['username']
      //       }
      //     }
      //   ]
      });
    });
  }
}

// create fields/columns for Beverage model
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
      allowNull: false
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'beverage'
  }
);

module.exports = Beverage;