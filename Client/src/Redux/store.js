import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/cartReducer'
import userDataReducer from "../Redux/Slices/userData";
const store = configureStore({
  reducer: {
    cart:cartReducer,
    user: userDataReducer,
  }
})

export default store