var dish = require('../models/dish');
var express = require('express');
var router = express.Router();

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    dish.getdishById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    dish.getalldish(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});


// router.post('/', function (req, res, next) {

//   Category.addCategory(req.body, function (err, rows) {
//     if (err) {
//       res.json(err);
//     }
//     else {
//       res.json(rows);
//     }
//   });
// });


router.delete('/:id', function (req, res, next) {
  dish.deletedishbyid(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

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
