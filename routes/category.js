const express = require('express');
const router = express.Router();
const Category = require('./../models/category');

//get array
router.route('/category').get((req, res) => {
  Category.find({})
    .exec((err, categories) => {
      if (err) {
        return res.send(err);
      }
      return res.json(categories);
    });

});

//get single
router.route('/category/:id').get((req, res) => {
  Category.findOne({ _id: req.params.id }).exec((err, category) => {
    if (err) {
      return res.send(err);
    }
    return res.json(category);
  });
});

//add single
router.route('/category').post((req, res) => {
  Category.create(req.body, (err, category) => {
    if (err) {
      return res.send(err);
    }
    return res.json(category);
  })
});

//update and replace
router.route('/category/:id').put((req, res) => {
  Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec((err, category) => {
    if (err) {
      return res.send(err);
    }
    return res.json(category);
  });
});

//delete
router.route('/category/:id').delete((req, res) => {
  Category.deleteOne({ _id: req.params.id }).exec((err, category) => {
    if (err) {
      return res.send(err);
    }
    return res.json(category);
  });
});

//TODO Include any RPC endpoints here

module.exports = router;