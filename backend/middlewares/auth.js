import jwt from "jsonwebtoken"

// Admin Authentication Middleware
const auth = async (req,res,next) => {

    try {
        const { token }  = req.headers;
        if(!token){
            return res.json({success: false, message:"Not authorrized login again"});
        }

        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id

        next();
        
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export default auth