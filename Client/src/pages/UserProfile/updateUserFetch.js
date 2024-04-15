import {toast} from "react-toastify";
import {updateUser} from "../../Redux/Slices/userData";
function updateUserFetch(token,Updating  , user , dispatch){
    // we extract field to bed updated / edited
    const {_id , ...UpdateField} = Updating;
    // we get key & value to dispatch the update 
    const [keyProperty , valueProperty] = Object.entries(UpdateField)[0]
    console.log("Updating",Updating , UpdateField)
    fetch("/api/user/update-user" , {
        method:"PUT",
        mode:"cors",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(Updating)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("data recieved from update fetch",data)
        if(data.success){
            toast.success(data.message)
            dispatch(updateUser({ ...user, [keyProperty]: valueProperty }));
        }
        else{
            toast.error(data.message)
        }
    }).catch((err)=>{
        console.error(`Error Updating ${err}`)
        toast.error(`Error Updating ${err}`)
    })
}

export default updateUserFetch;