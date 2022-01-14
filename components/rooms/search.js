var express = require('express');
var router = express.Router();

const RoomsController=require('./roomController');

/* GET room page. */

router.get('/:roomName', RoomsController.search);
module.exports = router;
