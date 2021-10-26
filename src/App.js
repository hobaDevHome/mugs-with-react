import React from "react";
import Cart from "./comps/Cart/Cart";
import Filters from "./comps/filters/Filters";
import Products from "./comps/products/Products";

function App() {
  return (
    <div className="filterDev">
      <div className="filter">
        <Filters />
      </div>
      <div className="mainDev">
        <div className="left">
          <Products />
        </div>
        <div className="right">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
