import { useLayoutEffect } from "react"
import {toast} from"react-toastify"
export default function useFetchAllUsers(token , setAllUsers){
    useLayoutEffect(()=>{
        fetch("/api/admin/all-users",{
            mode:"cors",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data=>{
            if(data.success){
                setAllUsers(data.allUsersData)
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