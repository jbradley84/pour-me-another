const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Beverage model
class Beverage extends Model {
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
   }
}

// create fields/columns for Beverage model

module.exports = Beverage;