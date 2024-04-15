const router = require("express").Router();
const {LoginController , RegisterController , ForgetPasswordController , UpdateUserController} = require("../controllers/authControllers");
const jwtVerify = require("../middlewares/jwtVerify");
// login
router.post("/login",LoginController)
// register
router.post("/register",RegisterController)
// forgot password
router.put("/forgetpassword",ForgetPasswordController);

// Update User Data
router.put("/update-user", jwtVerify  ,UpdateUserController);

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