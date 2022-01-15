var express = require('express');
var router = express.Router();

const ServicesController=require('./serviceController');

/* GET room page. */

router.get('/:serviceName', ServicesController.search);
module.exports = router;
