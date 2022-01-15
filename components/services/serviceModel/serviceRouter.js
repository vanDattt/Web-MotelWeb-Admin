var express = require('express');
var router = express.Router();

const ServicesController=require('../serviceController');

router.get('/', ServicesController.list);

router.post('/addservice',ServicesController.add)

router.post('/updateservice',ServicesController.update)

router.post('/eraseservice',ServicesController.erase)

router.get('/searchservice',ServicesController.search)

//router.get('/:roomID',RoomsController.detail);

router.get('/add', function(req, res, next) {
  res.render('../components/services/serviceView/addscreen');
});

router.get('/update', function(req, res, next) {
  res.render('../components/services/serviceView/updatescreen');
});

router.get('/erase', function(req, res, next) {
  res.render('../components/services/serviceView/erasescreen');
});

module.exports = router;
