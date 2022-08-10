const { Favorite } = require('../models');

const favoritedata = [
  {
    user_id: 1,
    beverage_id: 1
  },
  {
   user_id: 1,
   beverage_id: 2
 },
 {
   user_id: 1,
   beverage_id: 6
 },
 {
   user_id: 2,
   beverage_id: 3
 },
 {
   user_id: 2,
   beverage_id: 4
 },
 {
   user_id: 2,
   beverage_id: 11
 },
 {
   user_id: 3,
   beverage_id: 5
 },
 {
   user_id: 3,
   beverage_id: 6
 },
 {
   user_id: 3,
   beverage_id: 11
 },
 {
   user_id: 4,
   beverage_id: 7
 },
 {
   user_id: 4,
   beverage_id: 8
 },
 {
   user_id: 4,
   beverage_id: 12
 },
 {
   user_id: 5,
   beverage_id: 9
 },
 {
   user_id: 5,
   beverage_id: 10
 },
 {
   user_id: 5,
   beverage_id: 3
 },
 {
   user_id: 6,
   beverage_id: 11
 },
 {
   user_id: 6,
   beverage_id: 12
 },
 {
   user_id: 6,
   beverage_id: 1
 }
  
];

const seedFavorites = () => Favorite.bulkCreate(favoritedata);

module.exports = seedFavorites;