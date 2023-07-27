const express = require('express');
const { api_response } = require('../../utils/response.util');

const router = express.Router();

router.use((req, res) => {  
    return api_response(404, req, res, {
        message: 'Url Not Found'
    })
})

module.exports = router;