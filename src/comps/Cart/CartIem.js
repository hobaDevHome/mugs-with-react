import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../features/cart/CartSlice";

function CartIem({ cartItem }) {
  const { name, quantity, totalPrice, id } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="cartItemDescriptinContianer">
        <p>Name : {name}</p>
        <p>Quantity : {quantity}</p>
        <p>Price :$ {totalPrice}</p>
      </div>
      <div className="cartItemRemoveButtonContainer" onClick={()=>{
       dispatch(removeItemFromCart({id}))
        
      }}>
        <span>
          <i class="fas fa-trash-alt"></i>
        </span>
      </div>
    </div>
  );
}

export default CartIem;
