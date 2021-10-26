import React from 'react';
import { ProductList } from '../../Data/Products';
import Product from './Product';


function Products() {
  return (
    <div className="productsContiner">
      {ProductList.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default Products;
