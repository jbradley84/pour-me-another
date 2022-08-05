const router = require('express').Router();
const { User, Beverage, Rating } = require("../../models")


// GET all users
router.get('/', (req, res) => {
   User.findAll({
      attributes: { exclude: ['password'] }
   })
   .then(userData => res.json(userData))
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// GET a single user by ID
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
            model: Beverage,
            attributes: ['beverage_name'],
            through: Rating,
            as: 'rated_beverages'
         }
      ]
   })
   .then(userData => {
      if (!userData) {
         res.status(400).json({ message: 'No user found with this id!' });
         return;
      }
      res.json(userData);
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

//allows user to signup
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(userData => {
        req.session.save (() => {
            req.session.userId = userData.id;
            req.session.userName = userData.username;
            req.session.loggedIn = true;
            res.json(userData)
        })
    })
    .catch(err => {
        res.status(400).json({ message: err.message })
    })
})

//allows user to login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user account found!' })
            return;
        } 
        const validPassword = userData.checkPassword(req.body.password)
        if (!validPassword) {
            res.status(400).json({ message: 'Password does not match' })
            return;
        }
        req.session.save (() => {
            req.session.userId = userData.id;
            req.session.userName = userData.username;
            req.session.loggedIn = true;
            res.json({ message: 'You are now logged in! '})
        })
    })
    .catch(err => {
        res.status(400).json({ message: err.message })
    })
})

//allows the user to logout **NOT DONE
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        //clears the session when they log out
        req.session.destroy(() => {
            res.status(204).end();
        })
    }
    else {
        res.status(404).end();
    }
})

module.exports = router;