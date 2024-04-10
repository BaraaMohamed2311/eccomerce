import "./login.css";
import { useRef, useState } from "react";
import { loggedIn } from "../../Redux/Slices/userData";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  let dispatch = useDispatch();
  let inputPasswordRef = useRef();
  let inputUserRef = useRef();
  let [isFetching, setIsFetching] = useState(false);
  /****************/
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default reload
    const updatedFormData = {
      email: inputUserRef.current.value ,
      password: inputPasswordRef.current.value
    };

    // Perform the fetch request
    setIsFetching(true);
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
        toast.success("Logged in successfully!");
        dispatch(loggedIn(data.user)); // Update user context when data sent are correct
      } else {
        /*  toast */
        toast.error(data.message || "Login failed!");
      }
      setIsFetching(false);
    })
    .catch((e) => {
        /*  toast */
      toast.error("An error occurred during login!");
      setIsFetching(false);
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
            <div className="pass">Forgot Password?</div>
            <button disabled={isFetching} type="submit" value="Login">{!isFetching ? "Login" : "Logging in..."}</button>
            <div className="signup_link">
              Not a member? <a href="#">Signup</a>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default Login;
