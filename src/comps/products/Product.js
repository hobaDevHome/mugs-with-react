import React from 'react';
import QuantityButtons from './QuantityButtons';

function Product({ product }) {
  const {  name, price, img } = product;
  return (
    <div className="product">
      <div className="img">
        <img src={`./images/${img}.jpg`} alt={name} />
      </div>
      <div className="info-container">
        <h2 className="title">{name}</h2>
        <p>${price}</p>
        <QuantityButtons />

        <button className="addToChartButton">Add To Cart</button>
        <p>
          <a href="/">View Mug Details</a>
        </p>
      </div>
    </div>
  );
}

export default Product;
