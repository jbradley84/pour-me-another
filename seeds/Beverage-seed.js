const { Beverage } = require('../models');

const beveragedata = [
  {
    beverage_name: 'Purple Haze',
    beverage_type: 'Beer',
    user_id: 1
  },
  {
   beverage_name: 'Mad Butcher IPA',
   beverage_type: 'Beer',
   user_id: 1
 },
 {
   beverage_name: "Tito's",
   beverage_type: 'Vodka',
   user_id: 2
 },
 {
   beverage_name: 'Bombay Sapphire',
   beverage_type: 'Gin',
   user_id: 2
 },
 {
   beverage_name: 'Cabo Wabo',
   beverage_type: 'Tequila',
   user_id: 3
 },
 {
   beverage_name: 'Modelo Negra',
   beverage_type: 'Beer',
   user_id: 3
 },
 {
   beverage_name: 'Sazerac Rye',
   beverage_type: 'Whiskey',
   user_id: 4
 },
 {
   beverage_name: 'Chivas Regal',
   beverage_type: 'Whiskey',
   user_id: 4
 },
 {
   beverage_name: 'Coors Lite',
   beverage_type: 'Beer',
   user_id: 5
 },
 {
   beverage_name: 'Budweiser',
   beverage_type: 'Beer',
   user_id: 5
 },
 {
   beverage_name: 'The Kraken Black Spiced Rum',
   beverage_type: 'Rum',
   user_id: 6
 },
 {
   beverage_name: 'Crown Royal Peach Whiskey',
   beverage_type: 'Whiskey',
   user_id: 6
 }
  
];

const seedBeverages = () => Beverage.bulkCreate(beveragedata);

module.exports = seedBeverages;
