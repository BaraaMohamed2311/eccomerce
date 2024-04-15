import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    // we need to cache data to prevent overfetching same data over and over
    fetchedProducts : {} // we use hash map method for pagination were each key will be visited pages
}

const fetchedProductsSlice =createSlice({
    name:"fetchedProductsSlice",
    initialState,
    reducers:{
        addToFetched: (state,action)=>{
            // we check if page is visited and has products assigned or not
            if(!state.fetchedProducts[action.payload.currpage]){
                // if not then we add page num as key and products as value
                state.fetchedProducts[action.payload.currpage] = action.payload.products;
        }
        }
    }
})

export default fetchedProductsSlice.reducer
export const {addToFetched} = fetchedProductsSlice.actions