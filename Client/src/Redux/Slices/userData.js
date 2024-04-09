import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {token:undefined}
}

const userDateSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loggedIn:(state , action)=>{
            state.userData = action.payload
        },
        editUser:(state , action)=>{
            
        }
    }
})

export default userDateSlice.reducer;

export const { loggedIn } = userDateSlice.actions;