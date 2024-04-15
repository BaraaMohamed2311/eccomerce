import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Slices/productsReducer'
import userDataReducer from "../Redux/Slices/userData";
import fetchedProductsReducer from './Slices/fetchedProductsReducer';
const store = configureStore({
  reducer: {
    productsState:productsReducer,
    user: userDataReducer,
    fetchedProducts:fetchedProductsReducer
  }
})

export default store