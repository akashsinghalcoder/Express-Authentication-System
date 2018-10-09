var express = require('express');
var router = express.Router();
var home=require('../controllers/home');
var login=require('../controllers/login');

/* GET home page. */

router.get('/',home.home) ;
router.get('/userlogin',login.login);
router.post('/register',login.register);
router.get('/logout',login.logout);

module.exports = router;

