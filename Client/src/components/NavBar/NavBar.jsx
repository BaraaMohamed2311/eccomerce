import { Link } from "react-router-dom";
import { Outlet ,useNavigate} from "react-router";
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

                    <Link className="nav-li">WishList</Link>
                    <Link className="nav-li">Support</Link>
                    <Link className="nav-li">Blog</Link>
                    <Link className="nav-li">Services</Link>
                </div>

                <div className="nav-ul">
                    <Link to={"/private/movies"} className="nav-li nav-icon"><ion-icon name="play-outline"></ion-icon></Link>
                    <Link to={"/private/profile"} className="nav-li nav-icon"><ion-icon name="person-outline"></ion-icon></Link>
                    <Link to ={"/private/cart"} className="nav-li nav-icon"><ion-icon name="cart-outline"></ion-icon></Link>
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