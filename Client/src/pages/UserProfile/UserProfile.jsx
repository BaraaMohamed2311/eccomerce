import {  useState } from "react";
import "./userprofile.css";
import {useSelector , useDispatch} from"react-redux"
import updateUserFetch from "./updateUserFetch";


function UserProfile() {
const user = useSelector(state => state.user.userData);
const dispatch = useDispatch();
  // State to track which field is being edited
  const [editField, setEditField] = useState(null);
  // State to track the value being edited
  const [editValue, setEditValue] = useState('');

/****************function********************/
console.log("ediiiiit",editField)
const handleEditClick = (field) => {
  setEditField(field);
  setEditValue(user[field]);
};
  
const handleInputChange = (e) => {
  setEditValue(e.target.value);
};

const handleCancelClick = ()=>{
  setEditField(null);
}

const handleSaveClick = () => {
  setEditField(null);
  // we pass field to be edited and it's value  
  //we pass token to insure user is authorized for this updation
  // we pass id as we will use it to find user and update
  updateUserFetch(user.token , {[editField] : editValue , _id:user._id} , user , dispatch);
};
/****************Uploading profile image************************/
 function handleUploadImg(e){
  console.log("uploading")
  const formData = new FormData()
  formData.append("img",e.target.files[0]);
  
}
/****************Render field***********************/
const renderField = (field) => {
  if (editField === field) {
    return (
      <>
        <input className="userprofile-input" type="text" value={editValue} onChange={handleInputChange} />
        <button className="userprofile-cancel" onClick={handleCancelClick}>Cancel</button>
        <button className="userprofile-save" onClick={handleSaveClick}>Save</button>
      </>
    );
  }
  return (
    <>
      <span  className="userprofile-span">{user[field] || "Unspecified"}</span>
      <button className="userprofile-edit" onClick={() => handleEditClick(field)}>Edit</button>
    </>
  );
};
  /*************************/
  return (
    <div className="profilepage">
      <div className="userprofile">
        <div className="userprofile-wrapper">
            <div className="user-image-wrapper">
              <img className="userprofile-img" src={user.img || "/src/assets/user.webp"} alt="ecommerce-user-profile-image" />
              <label className="upload-image-btn" htmlFor="upload-profile-img">Upload Image</label>
              <input onChange={handleUploadImg} type="file" accept="image/jpeg , image/png , image/jpg , image/webp" id="upload-profile-img"/>
            </div>
            <div className="userprofile-info-wrapper">

            <div className="userprofile-field">
              <label className="userprofile-label">Email: </label>
              {renderField('email')}
            </div>

            <div className="userprofile-field">
              <label className="userprofile-label">Name: </label>
              {renderField('username')}
            </div>

            <div className="userprofile-field">
              <label className="userprofile-label">Phone: </label>
              {renderField('phone')}
            </div>

              <div className="userprofile-field">
                <label className="userprofile-label">Address: </label>
                {renderField('address')}
              </div>

            </div>
          </div>
          
      </div>
    </div>

  );
}

export default UserProfile;
