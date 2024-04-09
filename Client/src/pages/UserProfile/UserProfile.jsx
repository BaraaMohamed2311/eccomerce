import { useRef, useState } from "react";
import "./userprofile.css";
import {useSelector , useDispatch} from"react-redux"
function UserProfile() {
const user = useSelector(state => state.user.userData)
const dispatch = useDispatch();
// refrences 
const newEmailREF = useRef();
const NewPhoneREF = useRef();
const NewAddressREF = useRef();
let [ isEditMode , setIsEditMode] = useState(false)
  function handleEditUserData(){
    setIsEditMode(prev => !prev);
    if(isEditMode){
      // when we exit edit mode, in another words when editmode is false we save changes
      console.log("refrences",newEmailREF.current.value,NewPhoneREF.current.value,NewAddressREF.current.value)
    }
  }
  return (
    <div className="profilepage">
      <div className="userprofile">
        <div className="userprofile-wrapper">
            <img className="userprofile-img" src={user.img || "/src/assets/user.webp"} alt="ecommerce-user-profile-image" />
            <div className="userprofile-info-wrapper">
              {
                !isEditMode && 
                    <>
                      <h1 className="username">Name : {user.username}</h1>
                      <p className="user-p">Email : {user.email}</p>
                      <p className="user-p">Phone : {user.phone || "Not Specified"}</p>
                      <p className="user-p">Address : {user.address || "Not Specified"}</p>
                    </>
                }
                {
                  isEditMode &&
                  <>
                  <div className="txt_field">
                      <input ref={newEmailREF}  type="text" required />
                      <span></span>
                      <label>New Username</label>
                    </div>
                    <p className="user-p">Email : {user.email}</p>
                    <div className="txt_field">
                      <input ref={NewPhoneREF}  type="text" required />
                      <span></span>
                      <label>New Phone Number</label>
                    </div>
                    <div className="txt_field">
                      <input ref={NewAddressREF}  type="text" required />
                      <span></span>
                      <label>New Address</label>
                    </div>
                  </>
                }
            </div>
            <button onClick={handleEditUserData} className="editprofile">{!isEditMode? "Edit profile" : "Save Edits"}</button>
          </div>
          
      </div>
    </div>

  );
}

export default UserProfile;
