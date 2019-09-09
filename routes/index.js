var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../views/index.html'));
});
router.get('/registration', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../views/registration.html'));
});

module.exports = router;
