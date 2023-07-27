const { api } = require('../../configs/prefix.config');
const { api_response } = require('../../utils/response.util');

const express = require('express');

const router = express.Router();

router.get(`${api}`, (req, res) => {
    return api_response(200, req, res, {
        message: "Welcome to Tokopedia Play API Service"
    })
})

module.exports = router;