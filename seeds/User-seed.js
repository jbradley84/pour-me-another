const { User } = require('../models');

const UserData = [
    {
        id: 1,
        username: 'tlor026',
        email:'tlor026@gmail.com',
        password:'asdf',

    },
    {
        id: 2,
        username: 'tlor0026',
        email:'tlor0026@gmail.com',
        password:'asdf',

    },
    {
        id: 3,
        username: 'tlor00026',
        email:'tlor00026@gmail.com',
        password:'asdf',

    },
    {
        id: 4,
        username: 'tlor000026',
        email:'tlor000026@gmail.com',
        password:'asdf',

    },
    {
        id: 5,
        username: 'tlor0000026',
        email:'tlor0000026@gmail.com',
        password:'asdf',

    },
    {
        id: 6,
        username: 'tlor00000026',
        email:'tlor00000026@gmail.com',
        password:'asdf',

    },
  ];

  const seedUser = () => User.bulkCreate(UserData,{
    individualHooks: true,
    returning: true,
  });

  module.exports = seedUser;