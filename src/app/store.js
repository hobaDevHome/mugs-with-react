import cartReducer from '../features/cart/CartSlice'
import productsReducer from '../features/product/ProductSlice'
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
    reducer : {
        cart: cartReducer, 
        products: productsReducer,
       
    }
})

