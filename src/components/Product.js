import React from "react";

const Product = ({ data, deleteHandle }) => {
  const { id, title, price, quantity } = data;

  return (
    <div>
      {title} {price} {quantity}
      <button onClick={() => deleteHandle(id)}>delete</button>
    </div>
  );
};

export default Product;
