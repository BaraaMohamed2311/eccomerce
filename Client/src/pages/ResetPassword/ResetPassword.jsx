import { toast } from "react-toastify";
import "./resetpassword.css"
import { useRef, useState } from "react";
import {useParams} from 'react-router-dom';
function ResetPassword(){
    let [isSubmitted , setIsSubmitted] = useState(false)
    let NewPassInputRef = useRef();
    let RepNewPassInputRef = useRef();
    let params = useParams();
    function handelsubmit(e){
            e.preventDefault();
            if(NewPassInputRef.current.value === RepNewPassInputRef.current.value){
                fetch(`/api/user/reset-password/${params.userid}/${params.token}`,{method:"PUT",
                    headers:{
                    "Content-Type": "application/json",
                    },
                    mode:"cors",
                    body:JSON.stringify({password:NewPassInputRef.current.value})
                }).then((res)=>res.json()).then((data)=>{
                    if(data.success){
                        toast.success("Password Updated Successfully")
                    }
                    else{
                        toast.error("Password Wasn't Updated")
                    }
                }).catch((err)=>{
                    toast.error("Error Updating Password Successfully");
                    console.log("Error Updating Password",err)
                })
            }
            else{
                toast.error("Passwords Must Match");
            }
            
    }
    return (
        
        <div className="reset-password">
            <form className="request-reset-box" onSubmit={handelsubmit}>
                <div className="input-box">
                    <input ref = {NewPassInputRef}id="req-res-pass" type="password" required className="request-reset-input" />
                    <label htmlFor="#req-res-pass" className="request-reset-label">Your New Password</label>
                </div>
                <div className="input-box">
                    <input ref = {RepNewPassInputRef}id="req-res-pass2" type="password" required className="request-reset-input" />
                    <label htmlFor="#req-res-pass2" className="request-reset-label">Repeat New Password</label>
                </div>
                <button style={{backgroundColor: isSubmitted? "var(--green)" :"var(--main)"}} className="request-reset-btn">Reset Password</button>
            </form>
        </div>
    )
}
export default ResetPassword;