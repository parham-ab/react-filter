import React from "react";

const Product = ({ data, deleteHandle, incrementHandle, decrementHandle }) => {
  const { title, price, quantity } = data;

  return (
    <div>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{quantity}</p>

      <button onClick={decrementHandle}>-</button>
      <button onClick={incrementHandle}>+</button>
      <button onClick={deleteHandle}>delete</button>
    </div>
  );
};

export default Product;
