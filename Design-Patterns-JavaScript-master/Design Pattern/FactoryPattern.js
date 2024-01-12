const Category = require('../models/Category');
const Product = require('../models/Products'); 
const CrudService = require('./CrudService'); 

class ModelFactory {
    static createService(model) {
        switch (model) {
        case 'product':
            return new CrudService(Product);
        case 'category' :
            return new CrudService(Category)
        default:
            throw new Error(`Unknown model: ${model}`);
        }
    }
}

module.exports = ModelFactory;
