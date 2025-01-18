import express from "express"
import { addFood, getFoods, removeFood } from "../controllers/foodController.js";
import upload from "../middlewares/multer.js"; 

const foodRouter = express.Router();

foodRouter.post('/add-food',upload.single('image'),addFood);
foodRouter.get('/get-food',getFoods);
foodRouter.post('/remove-food',removeFood);

export default foodRouter;