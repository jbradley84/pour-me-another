const path = require('path')
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.port || 3001

const sequelize = require('./config/connection')
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

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(require('./controllers'));


sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});


