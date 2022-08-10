import { useEffect, useState } from "react";
import axios from "axios";
// components
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(response.data);
    };
    fetchData();
  }, []);
  // delete handle
  const deleteHandle = (id) => {
    const filteredItems = products.filter((item) => item.id !== id);
    setProducts(filteredItems);
  };
  // incrementHandle
  const incrementHandle = (id) => {
    const selectedItem = products.find((item) => item.id === id);
    let selectedItemCount = selectedItem.count;
    selectedItemCount++;
    console.log(selectedItemCount);
    setProducts(products);
  };

  return (
    <div>
      {products.map((item) => (
        <Product
          key={item.id}
          data={item}
          deleteHandle={deleteHandle}
          incrementHandle={incrementHandle}
        />
      ))}
    </div>
  );
};

export default ProductsList;
