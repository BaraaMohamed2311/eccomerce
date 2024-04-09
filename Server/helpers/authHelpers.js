const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const hashPassword = async (password)=>{
    try{
    const saltRounds = 10;
     const hashedPass = await bcrypt.hash(password, saltRounds);
     return hashedPass
    }
    catch (err){
        console.log("Error While Hashing Password " , err)
    }
}

const CheckPassword =  (password , hashedPass)=>{
    try{
      return   bcrypt.compare(password, hashedPass);
    }
    catch (err){
        console.log("Error While Checking Password  " , err)
    }

} 

const CreateToken =  (createBy , expiration)=>{
    try{
      return  jwt.sign(createBy,process.env.JWT_KEY,expiration)
    }
    catch (err){
        console.log("Error While Creating Token  " , err)
    }

} 


const IgnorePassword =  (user)=>{
    try{
        const {password , ...restInfo } = user ; 
      return  restInfo
    }
    catch (err){
        console.log("Error While IgnorePassword  " , err)
    }

} 

module.exports = { hashPassword , CheckPassword , CreateToken , IgnorePassword}