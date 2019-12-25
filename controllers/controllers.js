const Product = require('../models/models');


//Simple version, without validation 
exports.test = function (req, res) {
    res.send('Hello testing controller!');
};


//create
exports.product_create = function (req, res ) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created')
    })
};
//retrieve
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
 //update
exports.product_update = function (req, res) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
//delete
exports.product_delete = function (req, res, next) {
    Product.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Product Deleted!');
    })
};