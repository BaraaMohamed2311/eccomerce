import './signup.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { loggedIn } from "../../Redux/Slices/userData";
import { useNavigate } from 'react-router-dom';
function Signup(){

    let dispatch = useDispatch();
    const navigateTo = useNavigate();
    /*******************************************/
    let inputPasswordRef = useRef();
    let inputConfirmPasswordRef = useRef();
    let inputEmailRef = useRef();
    let inputUserRef = useRef();
    let inputPhoneRef = useRef();
    let [SignupState, setSignupStatee] = useState("Sign Up");
  /****************/
   function handleSubmit(e) {
    e.preventDefault();
    if(inputPasswordRef.current.value !== inputConfirmPasswordRef.current.value){
        toast.error("Passwords doesn't match");
        return
    }
     // Prevent default reload
    const updatedFormData = {
      email: inputEmailRef.current.value ,
      username:inputUserRef.current.value,
      phone:inputPhoneRef.current.value,
      password: inputPasswordRef.current.value
    };

    // Perform the fetch request
    setSignupStatee("Submitting");
    fetch("/api/user/register", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        /*  toast */
        toast.success(data.message);
        console.log("successsssssssss",data.user)
         dispatch(loggedIn(data.user)); // Update user context when data sent are correct
        setSignupStatee("Successfull!");
        navigateTo("/")
      } else {
        /*  toast */
        toast.error(data.message || "Signup failed!");
        setSignupStatee("Signup Again");
      }
    })
    .catch((err) => {
        /*  toast */
      toast.error(err.message);
      setSignupStatee("Signup Again");
      console.error("Error during fetch operation:", err);
    });
  }
    return (
        <div className="signup">
            <div className="signup-box">
                <div className="signup-left"> <img src='src/assets/signup.png' /></div>
                    <div className="signup-right">
                    <form  onSubmit={handleSubmit}>
                        <div className="txt_field">
                            <input ref={inputUserRef} type="text" required />
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input ref={inputEmailRef} type="text" required />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <div className="txt_field">
                            <input ref={inputPhoneRef} type="number" required />
                            <span></span>
                            <label>Phone Number</label>
                        </div>
                        <div className="txt_field">
                            <input ref={inputPasswordRef} type="password" required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className="txt_field">
                            <input ref={inputConfirmPasswordRef} type="password" required />
                            <span></span>
                            <label>Confirm Password</label>
                        </div>
                        {/* disable button untill fetch is done*/}
                            <button disabled={SignupState === "Submitting"} type="submit" value="Signup">{SignupState}</button>
                            
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup;