var express = require('express');
var router = express.Router();

const BillController=require('../billController');

router.get('/', BillController.list);

router.post('/date',BillController.date);

router.post('/month',BillController.month);

router.post('/date',BillController.year);
module.exports = router;
