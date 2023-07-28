// Route
const index_route = require('./src/routes/api/index.route');
const video_route = require('./src/routes/api/video.route');
const product_route = require('./src/routes/api/product.route');
const comment_route = require('./src/routes/api/comment.route');
const notfound_route = require('./src/routes/api/notfound.route');

// Database config
const mongodb_connect = require('./src/databases/index.database');
const factory = require('./src/databases/factory.database');

// Import depedencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Integration with MongoDB and Seeding Data
mongodb_connect();

// Generate seeders 
factory();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// Access routes
app.use(index_route);
app.use(video_route);
app.use(product_route);
app.use(comment_route);
app.use(notfound_route);

// Listen server
app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`);
})
