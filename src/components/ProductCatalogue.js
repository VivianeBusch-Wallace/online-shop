import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  // map through json data >>
  const items = data.map((item, i) => (
    <ProductItem key={i} productInfo={item} />
  ));

  return (
    <React.Fragment>
      <div className="cart-wrapper"></div>
      <ul className="product-list">{item}</ul>
    </React.Fragment>
  );
};
export default ProductList;
