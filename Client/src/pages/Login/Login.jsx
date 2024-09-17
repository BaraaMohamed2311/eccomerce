import "./login.css";
import { useRef, useState } from "react";
import { loggedIn } from "../../Redux/Slices/userData";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
function Login() {
  let dispatch = useDispatch();
  let inputPasswordRef = useRef();
  let inputUserRef = useRef();
  let [LoginState, setLoginState] = useState("Login");
  /****************/
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default reload
    const updatedFormData = {
      email: inputUserRef.current.value ,
      password: inputPasswordRef.current.value
    };

    // Perform the fetch request
    setLoginState("Submitting");
    fetch("/api/user/login", {
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
        dispatch(loggedIn(data.user)); // Update user context when data sent are correct
        setLoginState("Successfull");
      } else {
        /*  toast */
        toast.error(data.message || "Login failed!");
        setLoginState("Login Again");
      }
    })
    .catch((err) => {
        /*  toast */
      toast.error(err.message);
      setLoginState("Login Again");
      console.error("Error during fetch operation:", e);
    });
  }

  return (
    <>
      
      <div className="login">
        <div className="center">
          <h1>Login</h1>
          <form method="post" onSubmit={handleSubmit}>
            <div className="txt_field">
              <input ref={inputUserRef} type="text" required />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input ref={inputPasswordRef} type="password" required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass"><Link to={"/forgot-password"}>Forgot Password?</Link></div>
            {/* disable button untill fetch is done*/}
            <button disabled={LoginState === "Submitting"} type="submit" value="Login">{LoginState}</button>
            <div className="signup_link">
              Not a member? <Link to={"/signup"}>Signup</Link>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default Login;
