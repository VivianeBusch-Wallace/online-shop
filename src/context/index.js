import React from "react";
import Data from "../data.json";

// create an object for context
const Store = {
  // data is a reference of Data
  data: Data,
  cart: [],
  print: (str) => console.log(str),
  bill: function () {
    // return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    return Store.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  //   this just adds items/products into our cart >>
  addToCart: (item) => Store.cart.push(item),
};
const StoreContext = React.createContext(Store);

export { Store, StoreContext };

//try without the React in front of createContext
