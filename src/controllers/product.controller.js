const Product = require('../databases/models/product.model');
const { api_response } = require('../utils/response.util');

const get_product = async (req, res) => {
    try {
        const product = await Product.find();

        if (!product.length) {
            return api_response(204, req, res, {
                message: "Products doesn't exist"
            })
        }

        return api_response(200, req, res, {
            products: product
        });
    } catch (e) {
        return api_response(500, req, res, {
            error: "Internal Server Error"
        })
    }
}

const get_product_id = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.find({
            videoId: { $regex: `${id}`, $options: "i"}
        }).limit(5);

        if(!product.length){
            return api_response(204, req, res, {
                message: "Product doesn't exist"
            })
        }

        return api_response(200, req, res, {
            products: product
        });
    } catch (e) {
        return api_response(500, req, res ,{
            error: "Internal Server Error"
        })
    }
}

module.exports = {
    get_product, get_product_id
}