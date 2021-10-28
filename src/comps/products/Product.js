import React, { useState } from "react";
import QuantityButtons from "./QuantityButtons";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cart/CartSlice";

function Product({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { name, price, img } = product;
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="img">
        <img src={`./images/${img}.jpg`} alt={name} />
      </div>
      <div className="info-container">
        <h3 className="title">{name}</h3>
        <p>${price}</p>
        <QuantityButtons quantity={quantity} setQuantity={setQuantity} />

        <button
          className="addToChartButton"
          onClick={() => {
            dispatch(addItemToCart({product,quantity} ));
          }}
        >
          Add To Cart
        </button>
        
      </div>
    </div>
  );
}

export default Product;
