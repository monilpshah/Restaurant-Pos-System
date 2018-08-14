var Customer = require('../models/login');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

  Customer.login(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;
