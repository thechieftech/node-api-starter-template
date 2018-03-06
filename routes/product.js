const express = require('express');
const router = express.Router();
const Product = require('./../models/product');

//get array
router.route('/product').get((req, res) => {
  Product.find({})
    .exec((err, products) => {
      if (err) {
        return res.send(err);
      }
      return res.json(products);
    });

});

//get single
router.route('/product/:id').get((req, res) => {
  Product.findOne({ _id: req.params.id }).exec((err, product) => {
    if (err) {
      return res.send(err);
    }
    return res.json(product);
  });
});

//add single
router.route('/product').post((req, res) => {
  Product.create(req.body, (err, product) => {
    if (err) {
      return res.send(err);
    }
    return res.json(product);
  })
});

//update and replace
router.route('/product/:id').put((req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec((err, product) => {
    if (err) {
      return res.send(err);
    }
    return res.json(product);
  });
});

//delete
router.route('/product/:id').delete((req, res) => {
  Product.deleteOne({ _id: req.params.id }).exec((err, product) => {
    if (err) {
      return res.send(err);
    }
    return res.json(product);
  });
});

//TODO Include any RPC endpoints here

module.exports = router;