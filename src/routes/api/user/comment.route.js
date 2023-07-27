const { get_comment, post_comment } = require('../../../controllers/user/comment.controller');
const { api } = require('../../../configs/prefix.config');

const express = require('express');

const router = express.Router();

router.get(`${api}/comments/:id`, (req, res) => {
    get_comment(req, res);
})

router.post(`${api}/comments/:id`, (req, res) => {
    post_comment(req, res);
})

module.exports = router;