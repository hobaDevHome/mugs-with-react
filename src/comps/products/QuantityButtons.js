

function QuantityButtons({quantity,setQuantity}) {
  

  const addQuantity  =() =>{
    setQuantity(quantity + 1)
  }

   const subQuantity  =() =>{
     if(quantity>1)  setQuantity(quantity - 1)
  }
  return (
    <div className="quantity-buttons">
      <button onClick={addQuantity}>+</button>
      <span>{quantity}</span>
      <button onClick={subQuantity}>-</button>
    </div>
  );
}

export default QuantityButtons;
