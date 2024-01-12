const mongoose = require('mongoose');

// Modèle de catégorie (Category)
const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    isActive: Boolean,
    createdAt: Date,
    icon: String,
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category
