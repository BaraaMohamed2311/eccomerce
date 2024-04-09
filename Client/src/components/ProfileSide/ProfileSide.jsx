
import "./profileside.css";
import { forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";
let ProfileSide =forwardRef(function ProfileSide({isClosedHandler},ref){
    useImperativeHandle(ref,()=>{return {}});
    
  return (
    <div className="profileside">
      <ion-icon onClick={()=>isClosedHandler()}  id={"profileside-close"} name="close-outline"></ion-icon>
        <div className="profile-info">
            <img className="img-prof" src="src/assets/user.JPG" alt="Profile Photo" />
            <div className="name-prof">
              <h5>John Doe</h5>
              <Link to={"/user"} className="viewprof-link">view profile</Link>
            </div>
        </div>
      <div className="profile-ul">
            <Link to={"/cart"} className="profile-li">Shop Cart</Link>
            <Link to={"/movies"} className="profile-li">Play Movies</Link>
            <Link className="profile-li">WishList</Link>
            <Link className="profile-li">Support</Link>
      </div>
    </div>
  );
})

export default ProfileSide;
