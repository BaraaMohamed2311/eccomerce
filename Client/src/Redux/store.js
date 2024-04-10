import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Slices/productsReducer'
import userDataReducer from "../Redux/Slices/userData";
const store = configureStore({
  reducer: {
    productsState:productsReducer,
    user: userDataReducer,
  }
})

export default store