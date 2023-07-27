const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoId: {
        type: String, 
        required: true
    }, 
    videoThumb: {
        type: String, 
        required: true
    }, 
    title: {
        type: String, 
        required: true
    }
})

const Video = mongoose.model('videos', videoSchema, 'videos');

module.exports = Video;