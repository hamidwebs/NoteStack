import mongoose from "mongoose";
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB, 200 OK!');
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongoDB;