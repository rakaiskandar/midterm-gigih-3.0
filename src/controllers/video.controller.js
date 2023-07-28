const Video = require('../databases/models/video.model');
const { api_response } = require('../utils/response.util');

const get_video = async (req, res) => {
    try {
        const videos = await Video.find();

        if (!videos.length) {
            return api_response(404, req, res, {
                error: "Videos doesn't exist"
            })    
        }

        return api_response(200, req, res, {
            video: videos
        })
    } catch (e) {
        return api_response(500, req, res, {
            error: e.message
        })
    }
}

const search_video = async (req, res) => {
    const query = req.query.q;

    try {
        const videos = await Video.find({
            title: { $regex: `${query}`, $options: "i" }
        })

        if(!videos.length){
            return api_response(404, req, res, {
                error: "Search with other keyword!"
            })
        }

        return api_response(200, req, res, {
            count: videos.length,
            query: query,
            video: videos
        })
    } catch (e) {
        return api_response(500, req, res, {
            error: e.message
        })
    }
}

module.exports = {
    get_video, search_video
}