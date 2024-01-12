const FactoryPattern = require('../Design Pattern/FactoryPattern');

const ProductCRUD = FactoryPattern.createService('product');

const getAll = ProductCRUD.GetAll();
const getById = ProductCRUD.GetById();
const create = ProductCRUD.Create();
const updateById = ProductCRUD.UpdateById();
const deleteById = ProductCRUD.DeleteById();

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
