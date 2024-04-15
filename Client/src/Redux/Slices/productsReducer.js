import { createSlice } from "@reduxjs/toolkit";
import { toast} from "react-toastify"
const initialState = {
  products:[],
  wishlist:[],
  total:0
}
const MaxNumOfProducts = 100 ;
const calculateTotal = (products) => {
  if(products.length > 0)
    return products.reduce((total, product) => total + (product.price * product.cartQuantity), 0);
  else
    return 0;
};

const CartSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    addToCart: (state , action)=>{
      console.log("added to cart",action.payload)
        try{
          const isExist = state.products.find((prod)=>prod._id === action.payload._id);
          if(!isExist){
            state.products.push({...action.payload,cartQuantity:1}); // adding cartQuantity property when item is in cart
            state.total = calculateTotal(state.products);
          }
          toast.success("Added To Cart")
        }
          catch(err){
            toast.success("Failed To Add")
          }
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
      state.total = calculateTotal(state.products);

},
    decreaseQuantity: (state , action )=>{
      state.products = state.products.map(found => {
        if (found._id === action.payload._id && found.cartQuantity > 0) {
            return { ...found, cartQuantity: found.cartQuantity - 1 };
        }
        return found;
    }).filter(item => item.cartQuantity > 0);
    state.total = calculateTotal(state.products);
},

    removeFromCart: (state , action)=>{
      state.products= state.products.filter( item => item._id !== action.payload._id);
      state.total = calculateTotal(state.products);
    },

    emptyCart: (state)=>{
          state.products = [];
          state.total = 0;
},

  addToWishList:(state , action)=>{
    try {
    const isExist = state.wishlist.find((prod)=>prod._id === action.payload._id);
          if(!isExist)
            state.wishlist.push(action.payload);

            toast.success("Moved To Cart")
        }
          catch(err){
            toast.success("Failed To Move")
          }

  },

  removeFromWishList: (state , action)=>{
    
    state.wishlist= state.wishlist.filter( item => item._id !== action.payload._id)

},
  }
})

export const {addToCart , addToWishList   , increaseQuantity , decreaseQuantity , removeFromCart ,removeFromWishList, emptyCart} =CartSlice.actions
export default CartSlice.reducer