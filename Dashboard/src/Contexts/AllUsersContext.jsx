import { createContext , useContext , useState  } from 'react';

const allUsersContext = createContext();

const  useAllUsersContext = ()=>{
    return  useContext(allUsersContext)
}

const initialState = []
    


function AllUsersContextProvider({children}){
    let [ allUsersData , setallUsersData] = useState(initialState);

    

    return (
        <allUsersContext.Provider value={{allUsersData , setallUsersData}}>
            {children}
        </allUsersContext.Provider>
    )
}

export {useAllUsersContext , AllUsersContextProvider} ;