const video_seeder = require('./seeders/video.seeder');
const product_seeder = require('./seeders/product.seeder');

const init = async () => {
    await video_seeder();
    await product_seeder();
}

module.exports = init;