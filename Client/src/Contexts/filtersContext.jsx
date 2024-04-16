import { createContext , useContext, useEffect, useState } from "react";

const FiltersContext = createContext();
const  useFiltersContext = ()=>{
    return useContext(FiltersContext)
}

function FiltersContextProvider({children}){
    let [filtersState,setFiltersState]= useState({price:undefined,rating:undefined,categ:undefined});
    useEffect(()=>{
        console.log("updated filtersState",filtersState)
    },[filtersState])
    
    return (
        <FiltersContext.Provider value={{filtersState,setFiltersState}}>
            {children}
        </FiltersContext.Provider>
    )
}

export { useFiltersContext , FiltersContextProvider};