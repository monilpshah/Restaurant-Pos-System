 var bill = require('../models/bill_details');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

  bill.addbill_details(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.get('/:userid?', function (req, res, next) {

  if (req.params.userid) {

    bill.getbill_details(req.params.userid, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    bill.getbill_details(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});





// router.delete('/:id', function (req, res, next) {
//   dish.deletedishbyid(req.params.id, function (err, rows) {
//     if (err) {
//       res.json(err);
//     }
//     else {
//       res.json(rows);
//     }
//   });
// });

// router.put('/:id', function (req, res, next) {
//   Category.updateCategory(req.params.id, req.body, function (err, rows) {
//     if (err) {
//       res.json(err);
//     }
//     else {
//       res.json(rows);
//     }
//   });
// });
module.exports = router;
