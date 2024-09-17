const jwt = require("jsonwebtoken")

async function jwtVerify(req , res , next){
    try{
        const AuthHeadre = req.headers.authorization;
        const token = AuthHeadre.split(" ")[1];
        jwt.verify(token , process.env.JWT_KEY)

        next();
    }
    catch (err ) {
        console.log("error inside jwt verify", err);
        res.status(401).json({success:false, message : `Error while verifying token${err}` })
    }


}


module.exports = jwtVerify