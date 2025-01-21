import express from "express";
import { addCart, getCart, removeCart } from "../controllers/cartController.js";
import auth from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post('/add-cart',auth,addCart);
cartRouter.post('/remove-cart',auth,removeCart);
cartRouter.get('/get-cart',auth,getCart);

export default cartRouter;