const { Beverage } = require('../models');

const BeverageData = [
    {
        id: 1,
      beverage_name: 'TITOS',
      beverage_type:'Vodka',
      user_id:1,
    },
    {
        id: 2,
        beverage_name: 'YUENGLING',
        beverage_type:'Beer',
        user_id:2,
    },
    {
        id: 3,
        beverage_name: 'GUINESS',
        beverage_type:'Beer',
        user_id:3,
    },
    {
        id: 4,
        beverage_name: 'CABO WABO',
        beverage_type:'Tequila',
        user_id: 4,
    },
    {
        id: 5,
        beverage_name: 'BOMBAY SAPHIRE',
        beverage_type:'GIN',
        user_id:5,
    },
    {
        id: 6,
        beverage_name: 'MAD BUTCHER IPA',
        beverage_type:'Beer',
        user_id:6,
    },
  ];

  const seedBeverage = () => Beverage.bulkCreate(BeverageData);

  module.exports = seedBeverage;
