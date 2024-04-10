import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
  wishlist:[],
}
const MaxNumOfProducts = 100 ;

const CartSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    addToCart: (state , action)=>{
          const isExist = state.products.find((prod)=>prod._id === action.payload._id);
          if(!isExist)
            state.products.push(action.payload);

    },
    increaseQuantity: (state , action )=>{
      state.products.map(found =>{ 
        // we search for product to increase it's quantity property
        if(found._id === action.payload._id && found.cartQuantity <  MaxNumOfProducts){
          return {...found , cartQuantity: found.cartQuantity++  }
        }
          return found
        }
      )

},
    decreaseQuantity: (state , action )=>{
      state.products = state.products.map(found => {
        if (found._id === action.payload._id && found.cartQuantity > 0) {
            return { ...found, cartQuantity: found.cartQuantity - 1 };
        }
        return found;
    }).filter(item => item.cartQuantity > 0);
},

    removeFromCart: (state , action)=>{

          const isExist = state.products.find(item => item._id === action.payload._id)
          if(!isExist)
          state.products.filter( item => item._id !== action.payload._id)

    },
    EmptyCart: (state)=>{

          state.products = []

},
  addToWishList:(state , action)=>{
    const isExist = state.wishlist.find((prod)=>prod._id === action.payload._id);
          if(!isExist)
            state.wishlist.push(action.payload);

  }
  }
})

export const {addToCart , addToWishList  , increaseQuantity , decreaseQuantity , removeFromCart , EmptyCart} =CartSlice.actions
export default CartSlice.reducer