const UserModel = require("../models/User")
const { hashPassword, CheckPassword , CreateToken } = require("../helpers/authHelpers")
const Colorize = require( "../config/errorColors");
const mailHelpers = require("../helpers/mailHelpers")
const crypto = require("crypto")

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
        console.log("registering")
        const isExist = await UserModel.findOne({email: req.body.email})
        console.log("isExist" , isExist)
        if(isExist){
            res.status(409).json({
                success: false ,
                message:"Email Already Exists Please SignIn"
            })
        }
        const newUser = new UserModel({
            username:   req.body.username,
            email: req.body.email,
            password: await hashPassword(req.body.password),
            phone:  req.body.phone,
            address:  undefined,
            createdAt:new Date(),
            updatedAt:new Date()
        })
        
        const registeredUser = await newUser.save();
        console.log("registeredUser", registeredUser);
        const userInfo = registeredUser.toObject();
        const token = CreateToken({ id: userInfo._id, isAdmin: userInfo.isAdmin }, { expiresIn: "10m" });
        
        // Remove password field
        delete userInfo.password;
        res.status(200).json(
            {
                success:true,
                message:"Register Success",
                user:{...userInfo , token}
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
        console.log("email",req.body)
        // USER NOT FOUND 
        if(!User) 
            res.status(404).json({
                success:false,
                 message : "User Not Found"
            });
            
            let reset_token = crypto.randomBytes(20).toString('hex');
            // set user reset token and it's time of creation
            User.resetPassToken = reset_token;
            
            User.resetPassTokenCreatedAt =  new Date();
            // save to data base
            await User.save()
            // send link of reset
            //"/reset-password/:userid/:token"
            const reset_message = `Your request to reset your password was recieved,
             Now you have to visit this link to reset your password to a new one : http://localhost:3000/reset-password/${User._id}/${reset_token}`
            //(SendFrom , SendTo , subject , text)
            const isSent =await mailHelpers("baraamohamed2311@gmail.com" ,"baraamohamed2311@gmail.com", "Password Reset" , reset_message);
            
                if(isSent){
                    res.status(200).json({success:true,message:"Reset Password Link Was Sent"});
                }
                else{
                    res.status(501).json({success:false,message:"Reset Password Link Wasn't Sent"});
                }
    }
    catch(err){
        console.log(Colorize.BgRed , "Login Error : " , err , Colorize.Reset);
        res.status(500).json({
            success: false ,
            message : `Error Sending Reset Password Link`
            })
    }
}

// Reset Password 
const ResetPasswordController = async (req ,res)=>{
    try{
        console.log("password",req.body,typeof req.body.password )
        let params = req.params;
        const User = await UserModel.findOne({ _id:params.userid });
        let DateInstance = new Date(User.resetPassTokenCreatedAt);
        let created_Token_at = {hour :DateInstance.getHours(),day:DateInstance.getDate()};
        // USER NOT FOUND 
        if(!User) 
            res.status(404).json({
                success:false,
                 message : "User Not Found"
            });
        // we check if an hour passed since token was  created 
            let token_lifetime = 1; // hour
            // curent tim in hours 
            
            let current_Time = {hour :new Date().getHours(),day:new Date().getDate()};
            console.log(current_Time.hour,current_Time.day,created_Token_at.hour,created_Token_at.day)
            // the logic is if token created at 9  then 9 + liftime = 10 so current time must be 9-10 for is to be true
            if(created_Token_at.hour + token_lifetime >= current_Time.hour && created_Token_at.day === current_Time.day&& params.token === User.resetPassToken){
                // then token is still valid
                User.password = await hashPassword(req.body.password)
                await User.save()
                res.status(200).json({
                    success:true,
                     message : "Password Was Updated Successfully"
                });
            }
            else{
                res.status(501).json({
                    success:false,
                     message : "Password Wasn't Updated (Unvalid token)"
                });
            }
        
    }
    catch(err){
        console.log(Colorize.BgRed , "reset password Error : " , err , Colorize.Reset);
        res.status(500).json({
            success: false ,
            message : `Error Updating Password`
            })
    }
}

const UpdateUserController = async (req , res)=>{
    try{
        // seperating email -for finding user- from the property to be edited
        const {_id , ...editProperty}  = req.body; 
        // destructing key and new value for updating
        const [keyProperty , valueProperty] =  Object.entries(editProperty)[0];
        if(keyProperty && valueProperty && keyProperty !== "password"){
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


module.exports = { LoginController , RegisterController ,ForgetPasswordController , ResetPasswordController ,UpdateUserController}