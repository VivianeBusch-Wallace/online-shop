import React, { useState, useContext } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  // old way:
  // states >>
  // const [totalBill, setTotalBill] = useState(0);
  // const [cart, setCart] = useState([]);

  // add each item to cart with click >>
  // const addToCart = (item) => {
  //   setCart((prevState) => [...prevState, item]);
  // };
  // << this still has issues and does not work properly

  // map through json data to get each item >>
  // const items = data.map((item, i) => (
  //   <ProductItem key={i} productInfo={item} addToCart={addToCart} />
  // ));

  // calculate the total bill on click >>
  // const calculateTotal = () => {
  //   setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0));
  // };
  console.log({ cart });
  return (
    // new way with context >>
    <React.Fragment></React.Fragment>

    // old way without context >>
    // <React.Fragment>
    //   <div className="cart-wrapper">
    //     <h3>Items added to cart:</h3>
    //     <div className="cart-items">{cart.join(", ")}</div>
    //     <button onClick={calculateTotal}>Total bill</button>
    //     <span> (excl. delivery fees): {totalBill} Euros</span>
    //   </div>
    //   <ul className="product-list">{items}</ul>
    // </React.Fragment>
  );
};
export default ProductList;

// add items to cart and see what was added
// make items removable from cart
// why not all visible when cart printed out in console

// issues
// the cart only prints out [object Object]
