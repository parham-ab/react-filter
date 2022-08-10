import { useEffect, useState } from "react";
import axios from "axios";
// bootstrap
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

// components
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  //   base url
  const BASE_URL = `https://fakestoreapi.com/products`;
  //  fetch functions
  const fetchAll = async () => {
    const response = await axios.get(`${BASE_URL}`);
    setProducts(response.data);
  };
  const fetchJewelry = async () => {
    const response = await axios.get(`${BASE_URL}/category/jewelery`);
    setProducts(response.data);
  };
  const fetchElectronics = async () => {
    const response = await axios.get(`${BASE_URL}/category/electronics`);
    setProducts(response.data);
  };
  const fetchmens = async () => {
    const response = await axios.get(`${BASE_URL}/category/men's clothing`);
    setProducts(response.data);
  };
  const fetchWomens = async () => {
    const response = await axios.get(`${BASE_URL}/category/women's clothing`);
    setProducts(response.data);
  };
  // fetch all products onMount
  useEffect(() => {
    fetchAll();
  }, []);
  // fetch based on category
  useEffect(() => {
    category === "All" && fetchAll();
    category === "jewelery" && fetchJewelry();
    category === "electronics" && fetchElectronics();
    category === "men's clothing" && fetchmens();
    category === "women's clothing" && fetchWomens();
  }, [category]);

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
  // search
  const searchProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Container>
      {/* search */}
      <Form.Control
        size="lg"
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* filter */}
      <Form.Select
        size="sm"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>jewelery</option>
        <option>electronics</option>
        <option>men's clothing</option>
        <option>women's clothing</option>
      </Form.Select>

      {searchProducts.map((item) => (
        <Product
          key={item.id}
          data={item}
          deleteHandle={deleteHandle}
          incrementHandle={incrementHandle}
        />
      ))}
    </Container>
  );
};

export default ProductsList;
