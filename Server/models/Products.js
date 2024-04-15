const mongoose = require('mongoose');


const HomeProducts_Schema = new mongoose.Schema({
    
    title:{type:String, required:true },
    price:{type:Number, required:true},
    rating:{type:Number, required:true},
    img:{type:String , default: ""},
    category:{type:String , default:false},
    Show_case:{type:Object},

    
},{timestamps:true,collection:"Products"})

module.exports = mongoose.model("HomeProducts",HomeProducts_Schema);