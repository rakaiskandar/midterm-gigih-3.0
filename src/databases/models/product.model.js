const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String, 
        required: true
    },
    videoId: {
        type: String, 
        required: true
    }, 
    url: {
        type: String, 
        required: true
    }, 
    title: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    }
})

const Product = mongoose.model('products', productSchema, 'products');

module.exports = Product;