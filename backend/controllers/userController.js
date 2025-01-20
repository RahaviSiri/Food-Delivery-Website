import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// API to register user
const register = async (req,res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            return res.json({success:false,message:"Enter Details"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email"});
        }
        if(password.length < 8){
            return res.json({success:false,message:"Enter 8 digit passwords"});
        }

        // Hashing the Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const userData = {
            name:name,
            email:email,
            password:hashPassword
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

        res.json({success: true, token});

    } catch (error) {
        res.json({success:false,message:error.message});
        console.log(error.message);
    }
}

// API to login
const login = async (req,res) => {
    try {

        const { email, password } = req.body;
        if(!email || !password){
            return res.json({success:false,message:"Enter Details"});
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User not found"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
            return res.json({success:true,token});
        }else{
            return res.json({success:false,message:'Invalid Password'});
        }
        
    } catch (error) {
        res.json({success:false,message:error.message});
        console.log(error.message);
    }
}

export { register,login }