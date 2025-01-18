import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://rahavi:rahavi123@cluster0.vva3r.mongodb.net/food-delivery").then(() => console.log('Database Connected'));
}

export default connectDB;