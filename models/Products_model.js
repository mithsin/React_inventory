const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----database model-----
var productSchema = new Schema({
  name: {type: String, required: true},
  image: {type: Buffer},
  shipping_weight: {type: Number},
  actual_weight: {type: Number},
  color: {type: String},
  cartons: {type: Number},
  pkg_width: {type: Number},
  pkg_height: {type: Number},
  pkg_depth: {type: Number},
  actual_width: {type: Number},
  actual_height: {type: Number},
  actual_depth: {type: Number},
  shelf_length: {type: Number},
  shelf_width: {type: Number},
  inches_between_shelf: {type: Number},
  materials: {type: String},
  product_description: {type: String},
  product_specification: {type: String},
  feature_1: {type: String},
  feature_2: {type: String},
  feature_3: {type: String},
  care_instructions: {type: Boolean},
  assembly_required: {type: String},
  wholesale_price: {type: Number},
  retail_price: {type: Number}
})

const Product = module.exports = mongoose.model ('Product', productSchema);

module.exports = {
        getProducts: function(req, res) {
          Product
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addProduct: function(req, res) {
          Product
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getProductsById: function(req, res) {
          Product
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateProduct: function(req, res) {
          Product
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteProduct: function(req, res) {
          Product
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
