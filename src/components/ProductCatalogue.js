import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  // states >>
  const [cart, setCart] = useState([]);

  // add each item to cart with click >>
  const addToCart = (item) => {
    setCart((prevState) => [prevState, item]);
  };

  // map through json data to get each item >>
  const items = data.map((item, i) => (
    <ProductItem key={i} productInfo={item} />
  ));

  return (
    <React.Fragment>
      <div className="cart-wrapper">
        <h3>Items added to cart:</h3>
        <div className="cart-items">{cart}</div>
      </div>
      <ul className="product-list">{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;

// add items to cart and see what was added
// make items removable from cart
