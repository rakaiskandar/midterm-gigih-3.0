const Video = require('../databases/models/video.model');
const { api_response } = require('../utils/response.util');

const get_video = async (req, res) => {
    try {
        const videos = await Video.find();

        if (!videos.length) {
            return api_response(204, req, res, {
                message: "Videos doesn't exist"
            })    
        }

        return api_response(200, req, res, {
            videos: videos
        })
    } catch (e) {
        return api_response(500, req, res, {
            error: "Internal Server Error"
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
            return api_response(204, req, res, {
                message: "Videos Not Found"
            })
        }

        if(query === ""){
            return api_response(200, req, res, {
                message: "Search with other keyword!"
            })
        }

        return api_response(200, req, res, {
            count: videos.length,
            query: query,
            video: videos
        })
    } catch (e) {
        return api_response(500, req, res, {
            error: "Internal Server Error"
        })
    }
}

module.exports = {
    get_video, search_video
}