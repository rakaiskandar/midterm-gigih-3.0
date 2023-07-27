const Product = require('../../databases/models/product.model');
const Video = require('../../databases/models/video.model');
const { api_response } = require('../../utils/response.util');

const get_product = async (req, res) => {
    const id = req.params.id;

    try {
        const videos = await Video.find({
            videoId: { $regex: `${id}`, $options: "i"}
        });

        const product = await Product.find({
            videoId: { $regex: `${id}`, $options: "i"}
        }).limit(5);

        if(!videos.length){
            return api_response(404, req, res, {
                message: "Product doesn't exist"
            })
        }

        return api_response(200, req, res, {
            products: product
        });
    } catch (e) {
        return api_response(500, req, res ,{
            error: e.message
        })
    }
}

module.exports = {
    get_product
}