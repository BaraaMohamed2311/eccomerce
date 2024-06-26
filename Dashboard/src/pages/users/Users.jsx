/*import DataTable from '../../components/dataTable/DataTable';*/
import { useState } from 'react';
import './users.css';
import AddUser from '../../components/add/AddUser';
import{userRows} from '../../../data'
import DataTable from '../../components/dataTable/DataTable';


const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

function Users(){
    const [open , setOpen] = useState(false);
    
    return(
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>{
                  if(!open)
                  setOpen(true)
                }}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            { open && <AddUser className="add-window" slug= "user" 
            columns={columns} setOpen={setOpen} />}
        </div>
    )
}












export default Users ;