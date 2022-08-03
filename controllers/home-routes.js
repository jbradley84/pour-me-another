 const router = require('express').Router();

//renders login page
router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
       res.redirect('/');
       return;
   }

   res.render('login');
  });

  //renders sign page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
 
    res.render('signup');
   });
  
   
   module.exports = router;