const router = require('express').Router();
//Require USER model

const { User } = require("../../models")


//allows user to signup
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
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
        const validPassword = user.checkPassword(req.body.password)
        if (!validPassword) {
            res.status(400).json({ message: 'password does not match' })
            return;
        }
        req.session.save (() => {
            req.session.userId = userData.id;
            req.session.userName = userData.username;
            req.session.loggedIn = true;
            res.json({ message: 'you are now logged in! '})
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