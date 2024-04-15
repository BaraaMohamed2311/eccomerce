import { createContext , useContext , useState  } from 'react';

const allProductsContext = createContext();

const  useAllProductsContext = ()=>{
    return  useContext(allProductsContext)
}

const initialState = []
    


function AllProductsContextProvider({children}){
    let [ allProductsData , setallProductsData] = useState(initialState);

    

    return (
        <allProductsContext.Provider value={{allProductsData , setallProductsData}}>
            {children}
        </allProductsContext.Provider>
    )
}

export {useAllProductsContext , AllProductsContextProvider} ;