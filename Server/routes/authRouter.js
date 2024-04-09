const router = require("express").Router();
const {LoginController , RegisterController , ForgetPasswordController} = require("../controllers/authControllers");
const jwtVerify = require("../middlewares/jwtVerify");
// login
router.post("/login",LoginController)
// register
router.post("/register",RegisterController)
// forgot password
router.put("/forgetpassword",ForgetPasswordController);
// Authenticate Token 

router.get("/auth-user",jwtVerify , (req,res)=>{
    res.status(201).json({
        success:true,

    })
})



module.exports= router;