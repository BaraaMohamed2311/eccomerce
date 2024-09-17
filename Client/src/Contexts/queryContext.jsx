import { createContext , useContext, useEffect, useState } from "react";



const queryContext = createContext();
const  useQueryContext = ()=>{
    return useContext(queryContext)
}

function QueryContextProvider({children}){
    let [queryState,setQueryState]= useState({pagesize : 8 ,currpage:1});
    
    return (
        <queryContext.Provider value={{queryState,setQueryState}}>
            {children}
        </queryContext.Provider>
    )
}

export { useQueryContext , QueryContextProvider};