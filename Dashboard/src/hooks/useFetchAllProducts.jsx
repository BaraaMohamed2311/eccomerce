import { useLayoutEffect } from "react"
import {toast} from"react-toastify"
export default function useFetchAllProducts(token , setallProductsData){
    useLayoutEffect(()=>{
        fetch("/api/admin/all-products",{
            mode:"cors",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.success){
                console.log("fetching products succeeded" , data)
                setallProductsData(data.allProductsData)
            }
            else{
                toast.error("Failed To Fetch users")
            }
        })
        .catch((err)=>{
            toast.error("Error To Fetch users" ,err )
        })
    },[])
    
}