import React from 'react'
import CartIem from './CartIem'
import { useSelector } from "react-redux";
import { getCartItems } from "../../features/cart/CartSlice";

 
function Cart() {
    const cartItems = useSelector(getCartItems);
    const pricerray = cartItems.map(m=>m.totalPrice)
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    

    const sum = pricerray.length >0 ?  pricerray.reduce(reducer) : 0

  

    return (
        <div className="border-container cartContainer">
           <h2 className="title">Cart</h2>
           <div className="cartTotalPricContainer">
               <p>Total: </p>
               <span className="cartTotalPrice"> ${sum}</span>
           </div>
           
           {cartItems.map(cartItem =>{
               return(
                   <CartIem cartItem={cartItem}/>
               )
           })}


        </div>
    )
}

export default Cart
