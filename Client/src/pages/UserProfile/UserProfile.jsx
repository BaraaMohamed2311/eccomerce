import { useRef, useState } from "react";
import "./userprofile.css";
import {useSelector , useDispatch } from"react-redux"
import {updateUser} from "../../Redux/Slices/userData";
import {toast} from "react-toastify"

function UserProfile() {
let [ isEditMode , setIsEditMode] = useState(false)
const user = useSelector(state => state.user.userData);
const dispatch = useDispatch()
/***************refrences*****************/
const newEmailREF = useRef();
const NewPhoneREF = useRef();
const NewAddressREF = useRef();
/****************function********************/
function handleEdit(){
  setIsEditMode(prev => !prev);
}
function handleCancel(){
  setIsEditMode(false);
}

 // Function to handle saving edits
 function handleSave() {
  const updatedUser = {
    ...user,
    email: newEmailREF.current.value,
    phone: NewPhoneREF.current.value,
    address: NewAddressREF.current.value
  };
  // updating data in db
  fetch("api/user/update-user",{
    mode:"cors",
    method:"PUT",
    headers:{
      "Authorization":user.token,
    },
    body:JSON.stringify(updatedUser)
  })
  .then(res=> res.json())
  .then(data=>{
    if(data.success){
      dispatch(updateUser(updatedUser)); // Dispatch action to update user data
      setIsEditMode(false); // Exit edit mode
      toast.success("User Data Updated")
    }
    else{
      toast.error("Failed to Update User Data")
    }
  }).catch(err=>{
    console.error("Error updating user :",err);
    toast.error("Error Updating Data")
  })
  
}
  /*************************/
  return (
    <div className="profilepage">
      <div className="userprofile">
        <div className="userprofile-wrapper">
            <img className="userprofile-img" src={user.img || "/src/assets/user.webp"} alt="ecommerce-user-profile-image" />
            <div className="userprofile-info-wrapper">
              {
                !isEditMode && 
                    <>
                      <p className="user-p"><span className="user-span">Name : </span> {user.username}</p>
                      <p className="user-p"><span className="user-span">Email : </span> {user.email}</p>
                      <p className="user-p"><span className="user-span">Phone : </span> {user.phone || "Not Specified"}</p>
                      <p className="user-p"><span className="user-span">Address : </span> {user.address || "Not Specified"}</p>
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
            <div className="profile-btns">
            {isEditMode && <button onClick={handleCancel} className="editprofile cancel"> Cancel </button>}
            <button onClick={isEditMode ? handleSave : handleEdit} className="editprofile edit">{!isEditMode ? "Edit profile" : "Save Edits"}</button>
              
            </div>
          </div>
          
      </div>
    </div>

  );
}

export default UserProfile;
