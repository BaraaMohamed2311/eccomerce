/* eslint-disable react/prop-types */
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import "./dataTable.css";
import { Link } from 'react-router-dom';

/*
In the context of your code, 
params
 is an object provided by the DataGrid component from the '@mui/x-data-grid' library. This object contains information about the cell for which the 
renderCell
 function is being called.

Here's a brief overview of what 
params
 might contain:

params.id
: The id of the row that the cell belongs to.
params.field
: The field (column identifier) of the cell.
params.value
: The value of the cell.
params.row
: The full data of the row that the cell belongs to.
params.colDef
: The definition object of the column to which the cell belongs.
params.api
: The whole grid API.
In your specific case, you're using 
params.row.id
 to get the id of the row that the action buttons belong to. This id is then used in the 
 */

function trashHandler(id){
    console.log(id + "deleted")
}
  
  const DataTable = (props) => {

    const actionColumn = {
        
            field: "actions",
          headerName: "Actions",
          width: 100,
          renderCell: (params)=>{
            return <div className='action'>
                <Link to={`/${props.slug}/${params.row.id}`}>
                <i className="fa-solid fa-eye eye"></i>
                </Link>
                <div className="delete" onClick={()=>trashHandler(params.row.id)}>
                <i className="fa-solid fa-trash trash"></i>
                </div>
            </div>
          },
        
    }
  
    return (
      <div className="dataTable">

        <DataGrid className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500 /*عشان تعمل ديلاي في السيرش*/} 
            }
        } /*عشان السيرش */} 
      />
      </div>
    );
  };
  
  export default DataTable;