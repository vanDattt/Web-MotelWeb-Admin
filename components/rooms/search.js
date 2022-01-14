<<<<<<< HEAD
var express = require('express');
var router = express.Router();

const RoomsController=require('./roomController');

/* GET room page. */

router.get('/:roomName', RoomsController.search);
module.exports = router;
=======
var express = require('express');
var router = express.Router();

const RoomsController=require('./roomController');

/* GET room page. */

router.get('/:roomName', RoomsController.search);
module.exports = router;
>>>>>>> d17821c (Fix accounts page)
