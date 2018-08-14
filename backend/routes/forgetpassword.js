var User = require('../models/login');
var express = require('express');
var router = express.Router();

router.put('/', function (req, res, next) {
  User.forgetPassword(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
router.get('/:CustomerId', function (req, res, next) {
  User.getCustomerById(req.params.CustomerId, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

module.exports = router;
