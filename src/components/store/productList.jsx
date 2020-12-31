import React from "react";
import ItemCard from './itemCard'

const ProductList = ({product}) => {
  return (
      <div className="d-flex flex-wrap justify-content-center">
        {product && product.map((product) => (<ItemCard key={product.id} product={product} />))}
      </div>
  );
};

export default ProductList;