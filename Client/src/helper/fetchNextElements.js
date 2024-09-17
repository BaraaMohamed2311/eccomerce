import {toast} from "react-toastify";

function fetchNextElements( dispatch , addToFetched , URLParams){
    
    fetch(`/api/products/?${URLParams}`,{
        mode:"cors"
    })
    .then(res => res.json())
    .then((data)=>{
        // we pass currpage as key & products as value
        dispatch(addToFetched(data.products));
        
        })
    .catch((err)=>{
        toast.error("Error Please Refresh")
        console.log("error in fetching next elements",err)})
}

export default fetchNextElements;