const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentId: {
        type: String, 
        required: true
    },
    videoId: {
        type: String, 
        required: true
    }, 
    username: {
        type: String, 
        required: true
    }, 
    comment: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const Comment = mongoose.model('comments', commentSchema, 'comments');

module.exports = Comment;