import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cart',
    initialState : {
        cartItems: []
    },
  
    reducers: {
        addItemToCart : (state, action) =>{
            const genId = (new Date()).getTime();
           
            state.cartItems.push({
                 id:genId,
                 productId: action.payload.product.id,
                 quantity: action.payload.quantity,
                 price: action.payload.product.price,
                 totalPrice : action.payload.quantity * action.payload.product.price,
                 name: action.payload.product.name
            })
        }, 
        removeItemFromCart : (state, action) =>{
         
           state.cartItems = state.cartItems.filter(item =>item.id !== action.payload.id)
        }
    }
})

export const getCartItems = state => state.cart.cartItems;

export const {addItemToCart,removeItemFromCart } = slice.actions;

export default slice.reducer;