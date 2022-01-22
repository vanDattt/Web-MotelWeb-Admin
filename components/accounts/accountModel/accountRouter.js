var express = require('express');
var router = express.Router();

const AccountsController=require('../accountsController');

router.get('/', AccountsController.list);

router.get('/user-accounts', AccountsController.userlist);

router.get('/user-accounts/:id', AccountsController.userdetail);

router.get('/banuser/:id', AccountsController.banuser);

router.get('/unbanuser/:id', AccountsController.unbanuser);

router.get('/myaccount', AccountsController.myaccount);

router.post('/myaccount/update',AccountsController.myaccountUpdate);
module.exports = router;
