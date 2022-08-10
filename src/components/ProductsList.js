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
      id: 3,
      title: "Apple Tv",
      price: "$749",
      quantity: 3,
    },
  ]);

  // delete function
  const deleteHandle = (id) => {
    const filteredProducts = products.filter((item) => item.id !== id);
    setProducts(filteredProducts);
  };
  // increment function
  const incrementHandle = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    selectedItem.quantity++;
    setProducts(selectedItem);
    console.log(selectedItem);
  };
  // decrementHandle function
  const decrementHandle = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    selectedItem.quantity--;
    setProducts(products);
    console.log(selectedItem);
  };

  return (
    <>
      {products.map((item) => (
        <Product
          key={item.id}
          data={item}
          deleteHandle={() => deleteHandle(item.id)}
          incrementHandle={() => incrementHandle(item.quantity)}
          decrementHandle={() => decrementHandle(item.quantity)}
        />
      ))}
    </>
  );
};

export default ProductsList;
