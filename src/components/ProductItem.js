import React from "react";

const ProductItem = ({ productInfo, addToCart }) => {
  // deconstruct productInfo >>
  const { id, productName, icon, price, inventory } = productInfo;

  return (
    <li className="product-wrapper" key={id}>
      <h2>{productName}</h2>
      <i>{icon}</i>
      <h4>{price} Euros</h4>
      <p>
        Only <span className="inventory">{inventory}</span> items left in stock
      </p>
      <button
        disabled={inventory === 0}
        onClick={() => {
          console.log(productInfo);
          addToCart(productInfo);
        }}
      >
        {inventory > 0 ? "Add to cart" : "Sold Out"}
      </button>
    </li>
  );
};

export default ProductItem;
