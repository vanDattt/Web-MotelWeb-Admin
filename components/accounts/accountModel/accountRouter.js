var express = require('express');
var router = express.Router();

const AccountsController=require('../accountsController');

router.get('/', AccountsController.list);
router.get('/myaccount', AccountsController.myaccount);

module.exports = router;
