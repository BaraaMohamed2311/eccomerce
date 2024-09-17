const router = require("express").Router();
const {LoginController , RegisterController , ForgetPasswordController , ResetPasswordController , UpdateUserController} = require("../controllers/authControllers");
const jwtVerify = require("../middlewares/jwtVerify");
// login
router.post("/login",LoginController)
// register
router.post("/register",RegisterController)

// Update User Data
router.put("/update-user", jwtVerify  ,UpdateUserController);

// request reset-password link path 
router.post("/reset-password", ForgetPasswordController);

// reset-password 
router.put("/reset-password/:userid/:token", ResetPasswordController);

// Authenticate Token 
router.get("/auth-user",jwtVerify , (req,res)=>{
    try{
    res.status(201).json({
        success:true,
    })
}   catch (err){
    console.log("Error Authenticating User Token Route" , err)
    res.status(500).json({success:false,message:"Error Authenticating User Token Route"})
}
})



module.exports= router;