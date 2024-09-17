import { toast } from "react-toastify";
import "./forgotpassword.css"
import { useRef, useState } from "react";
function ForgotPassword(){
    let [isSubmitted , setIsSubmitted] = useState(false)
    let EmailInputRef = useRef()
    function handelsubmit(e){
            e.preventDefault();
            
            fetch("/api/user/reset-password",{
                method:"POST",
                mode:"cors",
                headers: {
                    "Content-Type": "application/json",
                  },
                body:JSON.stringify({email:EmailInputRef.current.value})
            }).then(req=>req.json()).then(data=>{
                if(data.success){
                    setIsSubmitted(true);
                    toast.success("Reset Link Was Sent Check Your Gmail");
                }else{
                    
                    toast.success("Email Wasn't Found");
                }
            }).catch(err=>{
                console.log("Error Sending Link Failed",err)
                toast.error("Error Sending Link Failed");
            })
    }
    return (
        
        <div className="reset-password">
            <form className="request-reset-box" onSubmit={handelsubmit}>
                <div className="input-box">
                    <input ref = {EmailInputRef}id="req-res-email" type="email" required className="request-reset-input" />
                    <label htmlFor="#req-res-email" className="request-reset-label">Type Your Email</label>
                </div>
                <button style={{backgroundColor: isSubmitted? "var(--green)" :"var(--main)"}} className="request-reset-btn">Request Link</button>
            </form>
        </div>
    )
}
export default ForgotPassword;