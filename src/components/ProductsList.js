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
    let selectedItem = products.find((item) => item.id === id);
    selectedItem.quantity++;
    setProducts(products);
    console.log(selectedItem);

    // selectedItem.quantity++;
    // setProducts(selectedItem);
  };
  // decrementHandle function
  const decrementHandle = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    // selectedItem.quantity--;
    // setProducts(products);
    // console.log(selectedItem);
  };
  // input onChange handle
  const changeHandle = (e, id) => {
    // console.log(e.target.value, id);
    // setProducts({ ...products, [e.target.id]: e.target.value });
    const selectedItem = products.find((item) => item.id === id);
    console.log(selectedItem.title, e.target.value);
    // selectedItem.title = e.target.value;
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
          //   titleVal={item.title}
          //   changeHandle={(e) => changeHandle(e, item.id)}
        />
      ))}
    </>
  );
};

export default ProductsList;
