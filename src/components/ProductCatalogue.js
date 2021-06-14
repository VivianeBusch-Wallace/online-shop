import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  // states >>
  const [totalBill, setTotalBill] = useState(0);
  const [cart, setCart] = useState([]);

  // add each item to cart with click >>
  const addToCart = (item) => {
    setCart((prevState) => [...prevState, item]);
  };

  // map through json data to get each item >>
  const items = data.map((item, i) => (
    <ProductItem key={i} productInfo={item} addToCart={addToCart} />
  ));

  // calculate the total bill on click >>
  const calculateTotal = () => {
    setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0));
  };
  console.log({ cart });
  return (
    <React.Fragment>
      <div className="cart-wrapper">
        <h3>Items added to cart:</h3>
        {/* <div className="cart-items">{cart.join(", ")}</div> */}
        <button onClick={calculateTotal}>Total bill</button>
        <span> (excl. delivery fees): {totalBill} Euros</span>
      </div>
      <ul className="product-list">{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;

// add items to cart and see what was added
// make items removable from cart
// why not all visible when cart printed out in console
