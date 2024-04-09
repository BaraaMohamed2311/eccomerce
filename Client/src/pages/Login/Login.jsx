import "./login.css"
import {  useRef, useState ,useEffect} from "react";
import { loggedIn } from "../../Redux/Slices/userData";
import { useDispatch } from 'react-redux'
function Login(){

let dispatch = useDispatch()
let inputPasswordRef = useRef() ;
let inputUserRef = useRef() ;
let [isFetching , setIsFetching] = useState(false)


 function handleSubmit(e){
  e.preventDefault(); // Prevent the default form submission behavior

  // Determine if the input is an email or username
  const isEmail = inputUserRef.current.value.includes('@');
  const updatedFormData = {
      username: isEmail ? '' : inputUserRef.current.value,
      email: isEmail ? inputUserRef.current.value : '',
      password: inputPasswordRef.current.value
  };

  // Perform the fetch request
  setIsFetching(true)
  fetch("/api/user/login", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(updatedFormData)
  })
  .then((res) => {
      if (!res.ok) {
          throw new Error('Connection ERROR');
      }
      return res.json(); 
  })
  .then((data) => {
    
    setIsFetching(false)
    dispatch(loggedIn(data.user)); // Update user context when data sent are correct
  })
  .catch((e) => {
      console.error("Error during fetch operation:", e);
  });
}



    return(
        <div className="login">
            <div className="center">
                    <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit}>
                    <div className="txt_field">
                    <input   ref={inputUserRef} type="text" required />
                    <span></span>
                    <label>Email</label>
                    </div>
                    <div className="txt_field">
                    <input  ref={inputPasswordRef} type="password" required />
                    <span></span>
                    <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <button disabled= {isFetching} type="submit" value="Login" >Login</button>
                    <div className="signup_link">
                    Not a member? <a href="#">Signup</a>
                    </div>
                </form>
            </div>
        </div>
        

    )
}


export default Login;