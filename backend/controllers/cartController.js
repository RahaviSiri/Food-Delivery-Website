import userModel from "../models/userModel.js";

// API to add cart
const addCart = async (req,res) => {
    try {
        const { userId,itemId } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        if(!cartData[itemId]){
            cartData[itemId] = 1;
        }else{
            cartData[itemId] += 1;
        }
        await userModel.findByIdAndUpdate({_id:userId},{cartData});
        return res.json({success:true,message:"Succesfully added"});

    } catch (error) {
        res.json({success:false,message:error.message});
    }
}


// API to remove from cart
const removeCart = async (req,res) => {
    try {
        const { userId,itemId } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        if(cartData[itemId] && cartData[itemId] > 0){
            cartData[itemId] -= 1;
        }
        await userModel.findByIdAndUpdate({_id:userId},{cartData});
        return res.json({success:true,message:"Succesfully removed"});

    } catch (error) {
        res.json({success:false,message:error.message});
    }
}



// API to get cart
const getCart = async (req,res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        return res.json({success:true,cartData:cartData});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export { addCart, removeCart, getCart}