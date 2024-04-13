import { useRef, useState } from "react";
import "./userprofile.css";
import {useSelector , useDispatch } from"react-redux"
import {updateUser} from "../../Redux/Slices/userData";
import {toast} from "react-toastify"

function UserProfile() {
const user = useSelector(state => state.user.userData);
const dispatch = useDispatch()
  // State to track which field is being edited
  const [editField, setEditField] = useState(null);
  // State to track the value being edited
  const [editValue, setEditValue] = useState('');

/****************function********************/

const handleEditClick = (field) => {
  setEditField(field);
  setEditValue(user[field]);
};
  
const handleInputChange = (e) => {
  setEditValue(e.target.value);
};

const handleSaveClick = () => {
  dispatch(updateUser({ ...user, [editField]: editValue }));
  setEditField(null);
};
/****************Render field***********************/
const renderField = (field) => {
  if (editField === field) {
    return (
      <>
        <input type="text" value={editValue} onChange={handleInputChange} />
        <button className="userprofile-save" onClick={handleSaveClick}>Save</button>
      </>
    );
  }
  return (
    <>
      <span>{user[field]}</span>
      <button className="userprofile-edit" onClick={() => handleEditClick(field)}>Edit</button>
    </>
  );
};
  /*************************/
  return (
    <div className="profilepage">
      <div className="userprofile">
        <div className="userprofile-wrapper">
            <img className="userprofile-img" src={user.img || "/src/assets/user.webp"} alt="ecommerce-user-profile-image" />
            <div className="userprofile-info-wrapper">

            <div className="userprofile-field">
              <label>Email: </label>
              {renderField('email')}
            </div>

            <div className="userprofile-field">
              <label>Name: </label>
              {renderField('username')}
            </div>

            <div className="userprofile-field">
              <label>Phone: </label>
              {renderField('phone')}
            </div>

              <div className="userprofile-field">
                <label>Address: </label>
                {renderField('address')}
              </div>

            </div>
          </div>
          
      </div>
    </div>

  );
}

export default UserProfile;
