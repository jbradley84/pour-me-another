const sequelize = require('../config/connection');
const { User, Beverage } = require('../models');

const userdata = [
  {
    username: 'test1',
    email: 'test1@email.com',
    password: 'test1'
  },
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
 }  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;