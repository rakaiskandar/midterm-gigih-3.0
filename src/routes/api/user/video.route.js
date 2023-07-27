const { api } = require('../../../configs/prefix.config');
const { get_video, search_video } = require('../../../controllers/user/video.controller');

const express = require('express');

const router = express.Router();

router.get(`${api}/videos`, (req, res) => {
    get_video(req, res);
})

router.get(`${api}/videos/search`, (req, res) => {
    search_video(req, res);
})

module.exports = router;