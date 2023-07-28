const { api } = require('../../configs/prefix.config');
const { get_product, get_product_id } = require('../../controllers/product.controller');

const express = require('express');

const router = express.Router();

router.get(`${api}/products`, (req, res) => {
    get_product(req, res)
})

router.get(`${api}/products/:id`, (req, res) => {
    get_product_id(req, res);
})

module.exports = router;