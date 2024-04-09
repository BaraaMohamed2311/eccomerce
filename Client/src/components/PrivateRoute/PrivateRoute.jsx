import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import { useSelector } from "react-redux";
import authCheck from "./authCheck.js"
function PrivateRoute() {
    let [isAccessible, setIsAccessible] = useState(false);
    const user = useSelector(state => state.user.userData);
    // to get route to be navigated to after login
    const location = useLocation().pathname; 
    const navigate = useNavigate();
    

    useEffect(() => {
        console.log("runninguseeffect" , user.token,user)
        if (user.token) {
            console.log("running auth check")
            authCheck(user.token , setIsAccessible ,location ,  navigate)
        } else {
            setIsAccessible(false);

        }
    }, [user]);

    return isAccessible ? <Outlet /> : <Login />;
}

export default PrivateRoute;
