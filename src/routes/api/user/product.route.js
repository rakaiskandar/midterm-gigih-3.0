const { api } = require('../../../configs/prefix.config');
const { get_product } = require('../../../controllers/user/product.controller');

const express = require('express');

const router = express.Router();

router.get(`${api}/products/:id`, (req, res) => {
    get_product(req, res);
})

module.exports = router;