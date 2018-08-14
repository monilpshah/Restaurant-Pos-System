var cuisine = require('../models/cuisine');
var express = require('express');
var router = express.Router();

router.get('/:cid?', function (req, res, next) {

  if (req.params.cid) {

    cuisine.getcuisinebyid(req.params.cid, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    cuisine.getallcuisine(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});


router.post('/', function (req, res, next) {

  cuisine.addcuisine(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


// router.delete('/:id', function (req, res, next) {
//   Category.deleteCategory(req.params.id, function (err, rows) {
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
