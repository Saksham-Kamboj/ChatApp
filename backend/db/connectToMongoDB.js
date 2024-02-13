import mongoose from "mongoose";
import Color from "colors";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Connected to MongoDB".bgCyan.white);
	} catch (error) {
		console.log("Error connecting to MongoDB".bgRed.white, error.message);
	}
};


export default connectToMongoDB;
