var express = require('express');
var router = express.Router();

// Require the controllers 
var product_controller = require('../controllers/controllers');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);



 // Create a new product
router.post('/create', product_controller.product_create);
  // Retrieve all products
router.get('/:id', product_controller.product_details);
 // Update a product with productId
router.put('/:id/update', product_controller.product_update);
// Delete a product with productId
router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;