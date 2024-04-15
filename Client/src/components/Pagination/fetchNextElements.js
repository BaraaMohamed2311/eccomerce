import {toast} from "react-toastify";
import { addToFetched } from "../../Redux/Slices/fetchedProductsReducer";

function fetchNextElements( queryParams,currpage ,pagesize, setIsFetching  , dispatch){
    const query = new URLSearchParams({
        ...queryParams,
        currpage,
        pagesize
    }).toString();
    console.log("query",query , "queryParams" ,queryParams)
    setIsFetching(true)
    fetch(`/api/products?currpage=${currpage}&pagesize=${pagesize}`,{
        mode:"cors"
    })
    .then(res => res.json())
    .then((data)=>{
        // we pass currpage as key & products as value
        dispatch(addToFetched({currpage,products :data.products}));
        setIsFetching(false);
        })
    .catch((err)=>{
        toast.error("Error Please Refresh")
        console.log("error in fetching next elements",err)})
}

export default fetchNextElements;