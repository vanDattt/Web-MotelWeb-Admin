var express = require('express');
var router = express.Router();

const LoginController = require('./loginController');

router.get('/', LoginController.list);

module.exports = router;
