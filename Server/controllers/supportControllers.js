const mailHelpers = require("../helpers/mailHelpers");

const mailSupportController =async (req,res)=>{
        const {email , ticket , text} =req.body;
        try{
            //(SendFrom , SendTo , subject , text)
            const isSent =await mailHelpers(email ,"baraamohamed2311@gmail.com", ticket , text);
            console.log("issent ",isSent)
            if(isSent){
                res.json({
                    success:true,
                    message:"Email Sent Successfully"
                });
            }
            else{
                res.json({
                    success:false,
                    message:"Email wasn't Sent"
                });
            }
            
        }
        catch(err){
            console.log("Error Sending Email Support" , err)
            res.json({
                success:false,
                message:"Error Sending Email"
            });
        }
    
}

module.exports = mailSupportController