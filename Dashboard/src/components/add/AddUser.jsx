
/* eslint-disable react/prop-types */
import './adduser.css';


function AddUser(props){

    function handleSubmits(e){
        e.preventDefault()
    }
    return (
        <div className='adduser'>
            <div className="modal">
                <span className='close-btn' onClick={()=>props.setOpen(false)} >X</span>
                <h1>Add New {props.slug}</h1>
                <form onSubmit={handleSubmits}>
                    { props.columns.filter((item)=>{
                        
                        return item.field !== "id" && item.field !== "img"
                    }).map((col)=>{
                       return(
                        <div key={col.headerName} className='ques'>
                        <label>{col.headerName}</label>
                        <input type={col.type} placeholder={col.field}/>
                        </div>
                       )
                    })
                    }
                    <button className='adduser-send'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;