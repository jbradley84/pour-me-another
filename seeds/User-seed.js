const { User } = require('../models');

const UserData = [
    {
        username: 'tlor026',
        email:'tlor026@gmail.com',
        password:'asdf'
    },
    {
        username: 'tlor0026',
        email:'tlor0026@gmail.com',
        password:'asdf'
    },
    {
        username: 'tlor00026',
        email:'tlor00026@gmail.com',
        password:'asdf'
    },
    {
        username: 'tlor000026',
        email:'tlor000026@gmail.com',
        password:'asdf'
    },
    {
        username: 'tlor0000026',
        email:'tlor0000026@gmail.com',
        password:'asdf'
    },
    {
        username: 'tlor00000026',
        email:'tlor00000026@gmail.com',
        password:'asdf'
    },
  ];
  
  const seedUser = () => User.bulkCreate(UserData);
  
  module.exports = seedUser;
  