import React from "react";

const Product = (props) => {
  const { id, title, price, quantity } = props;

  return <div>
    {title} {price} {quantity}
    <button>delete</button>
  </div>;
};

export default Product;
