const mongoose = require('mongoose');


const User_Schema = new mongoose.Schema({
    
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    phone: {type:String },
    address: {type:String   },
    img:{type:String , default: ""},
    cartItems:{type:Object , default: ""},
    isAdmin:{type:Boolean , default:false},
    resetPassToken:{type:String},
    resetPassTokenCreatedAt:{type:Date},
    createdAt:{type:Date},
    updatedAt:{type:Date}
    
    
},{timestamps:true , collection:"Users"})

module.exports = mongoose.model("User",User_Schema);

