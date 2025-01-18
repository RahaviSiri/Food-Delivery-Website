import foodModel from "../models/foodModel.js";
import fs from "fs"
import {v2 as cloudinary} from "cloudinary"

// API to store food
const addFood = async (req,res) => {
    try {
        const imageFile = req.file;
        // Upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'});
        const imageURL = imageUpload.secure_url;

        const food = new foodModel({
            name: req.body.name,
            image: imageURL,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category
        });
        await food.save();
        res.json({success:true,message:"Successfully Added"})  
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// API to list foods items
const getFoods = async (req,res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success:true,foods});
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// API to remove foods items
const removeFood = async (req,res) => {
    try {
        const { foodId } = req.body;
        // Delete from upload folder
        const food = await foodModel.findById(foodId);
        fs.unlink(`uploads/${food.image}`,() => {});
        // Delete from database 
        await foodModel.findByIdAndDelete(foodId);
        res.json({success:true,message:"Successfully Deleted"});
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export {addFood,getFoods,removeFood}