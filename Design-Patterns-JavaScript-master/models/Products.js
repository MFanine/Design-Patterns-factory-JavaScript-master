const mongoose = require('mongoose');

// Modèle de produit (Product)
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    thumbnail: String,
    images: [String],
    price: Number,
    SKU: String,
    variants: [String],
    quantityAvailable: Number,
    reviews: [String],
    status: String,
    compareAtPrice: Number,
    tags: [String],
    isAvailable: Boolean,
    wareHouseLocation: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;