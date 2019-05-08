var express = require('express');
var router = express.Router();
var path = require('path');
var pagecontroller = require(path.join(__dirname+'/../controllers/pages/PageController'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pages',pagecontroller.index);

module.exports = router;
