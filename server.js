const express = require('express');
const app = express();
const port = process.env.port || 3001
const sequelize = require('./config/connection')
//Adds the libraries needed to store sessions
//Sets up express.js session and connects it to sequelize database
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    //replace with an actual secret and add to .env
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};