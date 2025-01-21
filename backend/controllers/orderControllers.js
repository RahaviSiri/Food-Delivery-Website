import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order from frontend
const proceedPayment = async (req,res) => {

    const frontend_url = "http://localhost:5173"

    try {
        const { userId,items,amount,address } = req.body;

        const newOrder = new orderModel({
            userId : userId,
            items: items,
            amount: amount,
            address: address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId,{cartData:{}});

        const line_items = items.map((item) => ({
            price_data:{
                currency:"LKR",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }));
        line_items.push({
            price_data:{
                currency:"LKR",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*300
            },
            quantity: 1
        })
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({success:true,session_url:session.url})

    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export { proceedPayment }