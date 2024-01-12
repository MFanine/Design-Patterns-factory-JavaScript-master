const express = require('express');
const ProductController = require('../controller/ProductController');
const CategoryController = require('../controller/CategoryController');

class RouteFactory {
  static create(entity) {
    const router = express.Router();

    const controllers = {
      product: ProductController,
      category: CategoryController
    };

    const controller = controllers[entity];

    if (controller) {
      router.get('/', controller.getAll);
      router.get('/:id', controller.getById);
      router.post('/', controller.create);
      router.put('/:id', controller.updateById);
      router.delete('/:id', controller.deleteById);
    } else {
      router.get('/', (req, res) => {
        res.status(404).json({ message: 'Entity not found' });
      });
    }

    return router;
  }
}

module.exports = RouteFactory;
