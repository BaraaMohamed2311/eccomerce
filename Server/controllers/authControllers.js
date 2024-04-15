const UserModel = require("../models/User")
const { hashPassword, CheckPassword , CreateToken , IgnorePassword} = require("../helpers/authHelpers")
const Colorize = require( "../config/errorColors");



// Login
const LoginController = async (req ,res)=>{
    try{
        const User = await UserModel.findOne({ email: req.body.email });
        
        // USER NOT FOUND 
        if(!User) 
        res.status(404).json({
                success:false,
                 message : "User Not Found"
            });
        // IF VALID USER
        const isMatched = await CheckPassword(req.body.password , User.password);
        if(isMatched){
            
            const token = CreateToken({id: req.body._id, isAdmin : req.body.isAdmin} , {expiresIn : "10m"})
            // ignoring password we don't want to send it to client 
            // Convert Mongoose document to plain JavaScript object
            const userInfo = User.toObject();

            // Remove password field
            delete userInfo.password;
            res.status(200).json(
                {
                success: true ,
                user:{...userInfo , token},
                message:"Logged In Successfully"
            });
    }
    else{
        res.status(401 ).json({ 
            success: false ,
            message : "Invalid Email or Password"
        });
    }


    }
    catch(err){
        console.log(Colorize.BgRed , "Login Error : " , err , Colorize.Reset);
        res.status(500).json({
            success: false ,
            message : `Failed To Login`
            })
    }
}
// Register
const RegisterController = async (req ,res)=>{
    try{
        const newUser = new UserModel({
            username:   req.body.username,
            email: req.body.email,
            password: await hashPassword(req.body.password),
            phone:  req.body.phone,
            address:  req.body.address,
            createdAt:new Date(),
            updatedAt:new Date()
        })

        const registeredUser = await newUser.save();
        const userInfo = registeredUser.toObject();

            // Remove password field
            delete userInfo.password;
        res.status(200).json(
            {
                success:true,
                message:"Register Success",
                user:userInfo
            })

    }
    
    catch(err){
        console.log(Colorize.BgRed , "Register Error : " , err , Colorize.Reset);
        res.status(500).json(
            {
            success: false ,
            message : `Failed To Register`
        })
    }

}

// Forget Password 

const ForgetPasswordController = async (req ,res)=>{
    try{
        const User = await UserModel.findOne({ email: req.body.email });
        
        // USER NOT FOUND 
        if(!User) 
        res.status(404).json({
                success:false,
                 message : "User Not Found"
            });
       
            // hashing
            const newPassword = await hashPassword(req.body.password)
            // updating 
            const UpdatedUser = await UserModel.findOneAndUpdate(
                { email: req.body.email },
                 {password : newPassword}
            );

            const token = CreateToken({id: req.body._id, isAdmin : req.body.isAdmin} , {expiresIn : "5m"})
            const userInfo = User.toObject();

            // Remove password field
            delete userInfo.password;
        res.status(200).json(
            {
                success:true,
                message:"Password Updated",
                user:{...userInfo , token }
            })
    


    }
    catch(err){
        console.log(Colorize.BgRed , "Login Error : " , err , Colorize.Reset);
        res.status(500).json({
            success: false ,
            message : `Failed To Update Password`
            })
    }
}

const UpdateUserController = async (req , res)=>{
    try{
        // seperating email -for finding user- from the property to be edited
        const {_id , ...editProperty}  = req.body; 
        // destructing key and new value for updating
        const [keyProperty , valueProperty] =  Object.entries(editProperty)[0];
        if(keyProperty && valueProperty){
        const UpdatedUser = await UserModel.findByIdAndUpdate(
            { _id },{ [keyProperty]: valueProperty }
        );
        console.log("UpdatedUser",UpdatedUser)
        res.status(201).json({
            success:true,
            message:"Updated Successfully"
        })
    }
        else{
            res.status(201).json({
                success:true,
                message:"Updated Successfully"
            })
        }

    }
    catch (err){
        console.log("Error Updating User", err);
        res.status(500).json({
            success:false,
            message:"Error Updating User"
        })
    }
}   


module.exports = { LoginController , RegisterController ,ForgetPasswordController ,UpdateUserController}