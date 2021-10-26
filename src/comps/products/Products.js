import React from 'react';
import Product from './Product';
const ProductList = [
  {
    id: 1,
    name: 'White mug',
    price: 300,
    img: 'mug1',
  },
  {
    id: 2,
    name: 'green mug',
    price: 95,
    img: 'mug2',
  },
  {
    id: 3,
    name: 'blue',
    price: 120,
    img: 'mug3',
  },
];

function Products() {
  return (
    <div>
      {ProductList.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}

export default Products;
