var express = require('express');
var router = express.Router();

const RoomsController=require('../roomController');

/* GET room page. */
router.get('/', RoomsController.list);
/* ADD room page. */
router.post('/addroom',RoomsController.add)
/* UPDATE room page. */
router.post('/updateroom',RoomsController.update)
/* ERASE room page. */
router.post('/eraseroom',RoomsController.erase)

router.get('/searchroom',RoomsController.search)

router.get('/sort/high-price',RoomsController.sortHigh)

router.get('/sort/low-price',RoomsController.sortLow)

//router.get('/:roomID',RoomsController.detail);

router.get('/add', function(req, res, next) {
  res.render('../components/rooms/roomView/addscreen');
});

router.get('/update', function(req, res, next) {
  res.render('../components/rooms/roomView/updatescreen');
});

router.get('/erase', function(req, res, next) {
  res.render('../components/rooms/roomView/erasescreen');
});

module.exports = router;
