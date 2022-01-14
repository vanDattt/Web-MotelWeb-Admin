const express = require('express');
const router = express.Router();
const passport=require('../../auth/passport');

const LoginController = require('./loginController');
const authController = require('./authController');
router.get('/', LoginController.list);

router.post('/', passport.authenticate('local',{
    successRedirect:'/rooms',
    failureRedirect:'/?wrongPassword',
}),
  function(req, res) {
    if(req.user)
      {
        res.redirect("/rooms");
      }
    else
      res.redirect('/');
  },
);

router.get('/logout', function(req,res){
  console.log("log out");
  req.logout();
  res.redirect('/');
});

router.get('/register',LoginController.register);
router.post('/register',authController.register);
module.exports = router;
