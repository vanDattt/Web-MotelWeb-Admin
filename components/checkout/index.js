var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('../components/checkout/check-out');
});
module.exports = router;
