//Require USER model


//allows user to login **NOT DONE
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
})

//allows the user to logout **NOT DONE
router.post('/logout', (req, res) => {
    if (req.sessioin.loggedIn) {
        req.session.destroy(() => {
            res.status(201).end();
        })
    }
    else {
        res.status(404).end();
    }
})