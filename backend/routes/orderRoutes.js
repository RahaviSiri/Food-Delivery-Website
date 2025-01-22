import express from "express"
import { getAllOrders, getUserOrder, proceedPayment, updateStatus, verifyOrder } from "../controllers/orderControllers.js";
import auth from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.post('/proceed-pay',auth,proceedPayment);
orderRouter.post('/verify-order',verifyOrder);
orderRouter.get('/get-user-order',auth,getUserOrder);
orderRouter.get('/get-all-order',getAllOrders);
orderRouter.post('/post-status',updateStatus)


export default orderRouter;