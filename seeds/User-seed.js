const { User } = require('../models');

const UserData = [
   {
      username: 'test2',
      email: 'test2@email.com',
      password: 'test2'

   },
   {
      username: 'test3',
      email: 'test3@email.com',
      password: 'test3'

   },
   {
      username: 'test4',
      email: 'test4@email.com',
      password: 'test4'

   },
   {
      username: 'test5',
      email: 'test5@email.com',
      password: 'test5'

   },
   {
      username: 'test6',
      email: 'test6@email.com',
      password: 'test6'
   },
   {
      username: 'test7',
      email: 'test7@email.com',
      password: 'test7'

   },
];

const seedUser = () => User.bulkCreate(UserData, {
   individualHooks: true,
   returning: true,
});

module.exports = seedUser;