import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    // we need to cache data to prevent overfetching same data over and over
    fetchedProducts : [] // we use hash map method for pagination were each key will be visited pages
}

const fetchedProductsSlice =createSlice({
    name:"fetchedProductsSlice",
    initialState,
    reducers:{
        addToFetched: (state,action)=>{
            state.fetchedProducts = [...action.payload]
        }
        }
    
    })

export default fetchedProductsSlice.reducer
export const {addToFetched} = fetchedProductsSlice.actions