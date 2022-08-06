const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our Post model
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
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'beverage'
  }
);

module.exports = Beverage;