var express = require('express');
var router = express.Router();

const RoomsController = require('./roomsController');
router.get('/', function(req, res, next) {
  res.render('partials/header');
});

router.get('/', RoomsController.list);

router.get('/', function(req, res, next) {
  res.render('partials/footer');
});

module.exports = router;
