const { Beverage } = require('../models');

const BeverageData = [
    {
      beverage_name: 'TITOS',
      beverage_type:'Vodka',
      user_id:'1',
      rating_id:'2'
    },
    {
        beverage_name: 'YUENGLING',
        beverage_type:'Beer',
        user_id:'2',
        rating_id:'3'
    },
    {
        beverage_name: 'GUINESS',
        beverage_type:'Beer',
        user_id:'3',
        rating_id:'4'
    },
    {
        beverage_name: 'VABO WABO',
        beverage_type:'Tequila',
        user_id:'4',
        rating_id:'5'
    },
    {
        beverage_name: 'BOMBAY SAPHIRE',
        beverage_type:'GIN',
        user_id:'5',
        rating_id:'6'
    },
    {
        beverage_name: 'MAD BUTCHER IPA',
        beverage_type:'Beer',
        user_id:'6',
        rating_id:'7'
    },
  ];
  
  const seedBeverage = () => Beverage.bulkCreate(BeverageData);
  
  module.exports = seedBeverage;
  