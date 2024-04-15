import { createContext , useContext, useReducer  } from 'react';
import { userReducer } from './Reducers/userReducer';
import { statsReducer } from './Reducers/statsReducer';

const stateContext = createContext({});

const  useStateContext = ()=>{
    return  useContext(stateContext)
}
const initialState_user = {
        token:undefined
}

const initialState_stats = {
    
}



function stateContextProvider(children){
    let [ userstate , dispatchUser] = useReducer(userReducer,initialState_user);
    let [ statsState , dispatchStats] = useReducer(statsReducer,initialState_stats);
    

    return (
        <stateContext.Provider value={{ userstate , dispatchUser   , statsState , dispatchStats}}>
            {children}
        </stateContext.Provider>
    )
}

export { useStateContext , stateContextProvider}