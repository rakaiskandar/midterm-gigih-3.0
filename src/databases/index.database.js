require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.VERCEL_MONGODB_URI;

const mongodb_connect = () => {
    mongoose.connect(mongoString, {
        useUnifiedTopology: true,
		useNewUrlParser: true,
    });

    mongoose.connection.on("connected", () => {
		console.log("Connected to database successfully");
	});

	mongoose.connection.on("error", (err) => {
		console.log("Error while connecting to database :" + err);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongodb connection disconnected");
	});

} 

module.exports = mongodb_connect;

