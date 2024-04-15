import { Link } from "react-router-dom";
import { Outlet} from "react-router";
import {  useRef ,useState} from "react";
import ProfileSide from "../ProfileSide/ProfileSide"
import './navbar.css';

function NavBar() {
    let ProfileSideRef = useRef()
    let [isClosed , setIsClosed] = useState(true);
    function handleClick(){
        setIsClosed(prev => !prev);
    }
    return (
        <>
        <nav className="nav ">
            <div className="wrapper">
                <Link to={"/"} className="logo">AIO</Link>

                <div className="nav-ul">
                
                    
                    <Link data-link={"Movies"} to={"/private/movies"} className="nav-li nav-icon"><ion-icon name="play-outline"></ion-icon></Link>
                    <Link data-link={"Wishlist"} to={"/private/wishlist"} className="nav-li nav-icon"><ion-icon name="heart-outline"></ion-icon></Link>
                    <Link data-link={"Cart"} to ={"/private/cart"} className="nav-li nav-icon"><ion-icon name="cart-outline"></ion-icon></Link>
                    <Link data-link={"Profile"} to={"/private/profile"} className="nav-li nav-icon"><ion-icon name="person-outline"></ion-icon></Link>
                    <Link data-link={"Support"} to={"/support"} className="nav-li nav-icon"><ion-icon name="chatbox-outline"></ion-icon></Link>
                </div>

                <div onClick={handleClick} id="collapse-nav">
                    <div className="bars"></div>
                    <div className="bars"></div>
                    <div className="bars"></div>
                </div>
            </div>
        </nav>
        {!isClosed && <ProfileSide isClosedHandler = {handleClick}  ref={ProfileSideRef}/>}
        <Outlet/>
        </>
        
    )
}

export default NavBar ;