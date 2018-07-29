var bill = require('../models/bill');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

  bill.addbill(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

// router.get('/:cname', function (req, res, next) {

//   if (req.params.cname) {

//     dishcuisine.getdishcuisine(req.params.cname, function (err, rows) {

//       if (err) {
//         res.json(err);
//       }
//       else {
//         res.json(rows);
//       }
//     });
//   }
//   else {

//     dish.getalldish(function (err, rows) {

//       if (err) {
//         res.json(err);
//       }
//       else {
//         res.json(rows);
//       }

//     });
//   }
// });





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
