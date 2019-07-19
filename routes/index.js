var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/basics', function(req, res, next) {
  res.render('basics');
});

module.exports = router;
