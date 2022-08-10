import React, { useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Iphone 13",
      price: "$999",
      quantity: 1,
    },
    {
      id: 2,
      title: "Asus ROG",
      price: "$2769",
      quantity: 3,
    },
    {
      id: 1,
      title: "Apple Tv",
      price: "$749",
      quantity: 3,
    },
  ]);

  return (
    <>
      {products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </>
  );
};

export default ProductsList;
