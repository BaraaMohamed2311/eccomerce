import { configureStore , combineReducers  } from '@reduxjs/toolkit'
import productsReducer from './Slices/productsReducer'
import userDataReducer from "../Redux/Slices/userData";
import fetchedProductsReducer from './Slices/fetchedProductsReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  productsState:productsReducer,
    user: userDataReducer,
    fetchedProducts:fetchedProductsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
  reducer: persistedReducer
})


const persisted_store = persistStore(store)

export   {store , persisted_store}