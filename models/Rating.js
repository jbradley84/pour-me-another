const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Rating model
class Rating extends Model {}

// create fields/columns for Rating model


module.exports = Rating;