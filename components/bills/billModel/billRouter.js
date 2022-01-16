var express = require('express');
var router = express.Router();

const BillController=require('../billController');

router.get('/', BillController.list);

module.exports = router;
