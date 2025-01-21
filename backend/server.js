import express from "express"
import cors from "cors"
import "dotenv/config"
// If you don't call dotenv.config() at the beginning of server.js, your environment variables (like CLOUDINARY_API_KEY) will be undefined, leading to errors like:
// Must supply api_key
// Error: Undefined database connection string
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
// DB Connect
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// API End Points
app.get("/",(req,res) => {
    res.send("API working");
});
app.use('/api/food',foodRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.listen(port,() => {
    console.log("Your Server running on port ", port);
})
