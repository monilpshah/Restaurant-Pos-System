var Admin = require('../models/login');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

  Admin.adminlogin(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
router.get('/:adminid?', function (req, res, next) {

  if (req.params.userid) {

    Admin.getadminbyid(req.params.userid, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    Admin.getalladmins(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});
module.exports = router;
