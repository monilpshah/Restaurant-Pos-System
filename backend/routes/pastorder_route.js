var pastorder = require('../models/pastorder');
var express = require('express');
var router = express.Router();



router.get('/:userid?', function (req, res, next) {

  if (req.params.userid) {

    pastorder.getpastorderbyid(req.params.userid, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    pastorder.getpastorder(function (err, rows) {

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
