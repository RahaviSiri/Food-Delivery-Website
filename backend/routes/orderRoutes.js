import express from "express"
import { proceedPayment } from "../controllers/orderControllers.js";
import auth from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.post('/proceed-pay',auth,proceedPayment);
// orderRouter.get('/get-food',);


export default orderRouter;