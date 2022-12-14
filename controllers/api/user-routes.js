const router = require('express').Router();
const { User, Beverage, Review, Favorite } = require('../../models');

// get all users
router.get('/', (req, res) => {
   User.findAll({
      attributes: { exclude: ['password'] }
   })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
   User.findOne({
      attributes: { exclude: ['password'] },
      where: {
         id: req.params.id
      },
      include: [
         {
            model: Beverage,
            attributes: ['id', 'beverage_name', 'beverage_type']
         },
         {
            model: Review,
            attributes: ['id', 'review_text'],
            include: {
               model: Beverage,
               attributes: ['beverage_name']
            }
         },
         {
            model: Beverage,
            attributes: ['beverage_name'],
            through: Favorite,
            as: 'favorite_beverages'
         }
      ]
   })
      .then(dbUserData => {
         if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
         }
         res.json(dbUserData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
   // expects {username: 'test1', email: 'test1@email.com', password: 'test1'}
   User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
   })
      .then(dbUserData => {
         req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/login', (req, res) => {
   // expects {email: 'test1@email.com', password: 'test1'}
   User.findOne({
      where: {
         email: req.body.email
      }
   }).then(dbUserData => {
      if (!dbUserData) {
         res.status(400).json({ message: 'No user found with that email address!' });
         return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
         res.status(400).json({ message: 'Incorrect password!' });
         return;
      }

      req.session.save(() => {
         req.session.user_id = dbUserData.id;
         req.session.username = dbUserData.username;
         req.session.loggedIn = true;

         res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
   });
});

//allows the user to logout
router.post('/logout', (req, res) => {
   if (req.session.loggedIn) {
      req.session.destroy(() => {
         res.status(204).end();
      });
   }
   else {
      res.status(404).end();
   }
});

module.exports = router;