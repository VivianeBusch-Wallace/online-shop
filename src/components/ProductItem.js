import React from "react";

const ProductItem = ({ productInfo, addToCart }) => {
  // deconstruct productInfo >>
  const { id, productName, icon, price, inventory, image } = productInfo;

  return (
    <li className="product-wrapper" key={id}>
      <h2>{productName}</h2>
      <div>{icon || image}</div>
      <h4>{price} Euros</h4>
      <p className="inventory">
        Only{" "}
        <span>
          {inventory
            ? `There are only {inventory} items left in stock. Do you want to buy more?`
            : "You just added the last item of {productName} into your cart! Phew, just in time!"}
        </span>{" "}
        items left in stock.
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
