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
        updateUser:(state , action)=>{
            state.userData = action.payload
        }
    }
})

export default userDateSlice.reducer;

export const { loggedIn , updateUser } = userDateSlice.actions;