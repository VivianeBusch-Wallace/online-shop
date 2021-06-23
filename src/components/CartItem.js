import React from "react";

const ProductItem = ({ productInfo }) => {
  // deconstruct productInfo >>
  const { id, productName, icon, price, inventory } = productInfo;

  return (
    <li className="product-wrapper" key={id}>
      <h2>{productName}</h2>
      <i>{icon}</i>
      <h4>{price} Euros</h4>
      <p>
        Only <span className="inventory">{inventory}</span> items left in stock.
      </p>
    </li>
  );
};

export default ProductItem;
