var express = require('express');
var router = express.Router();
const AccountsController=require('./accountsController');

router.get('/', AccountsController.list);
module.exports = router;
