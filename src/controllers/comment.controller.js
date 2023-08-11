const Comment = require('../databases/models/comment.model');
const Video = require('../databases/models/video.model');
const { generateRandomInt } = require('../utils/general.util');
const { api_response } = require('../utils/response.util');

const get_comment = async (req, res) => {
    const id = req.params.id;

    try {
        const comment = await Comment.find({
            videoId: { $regex: `${id}`, $options: "i" }
        })

        if(!comment.length){
            return api_response(204, req, res ,{
                message: "Comment doesn't exist in this video",
            });
        }

        return api_response(200, req, res ,{
            comments: comment
        });

    } catch (e) {
        return api_response(500, req, res, {
            error: "Internal Server Error"
        })
    }
}

const post_comment = async (req, res) => {
    const id = req.params.id;
    const { comment, username } = req.body;
    try {
        const video = await Video.find({
            videoId: { $regex: `${id}`, $options: "i"}
        })

        const newComment = new Comment({
            commentId: `C-${generateRandomInt()}`,
            videoId: id,
            username: username,
            comment: comment,
            date: new Date().toISOString()
        });
        
        if(!video.length){
            return api_response(204, req, res, {
                error: "Video doesn't exist",
            });   
        }

        await newComment.save();

        return api_response(201, req, res ,{
            comments: newComment
        });
    } catch (e) {
        return api_response(500, req, res, {
            error: "Internal Server Error"
        })
    }
}

module.exports = {
    get_comment, post_comment
}