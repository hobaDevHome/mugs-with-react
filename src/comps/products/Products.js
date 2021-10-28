import React from "react";

import Product from "./Product";
import ProducsProvider from "../../features/product/products";

import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../features/product/ProductSlice";

function Products() {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div className="productsContiner">
      {ProducsProvider.filter((prod) => {
        if (selectedCategory === "all") return true;
        return prod.category === selectedCategory;
      })
      .map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default Products;
