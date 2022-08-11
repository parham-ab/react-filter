import { useEffect, useState } from "react";
import axios from "axios";
// bootstrap
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// preloader
import { InfinitySpin } from "react-loader-spinner";
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
    switch (category) {
      case "All":
        fetchAll();
        break;
      case "jewelery":
        fetchJewelry();
        break;
      case "electronics":
        fetchElectronics();
        break;
      case "men's clothing":
        fetchmens();
        break;
      case "women's clothing":
        fetchWomens();
        break;

      default:
        fetchAll();
        break;
    }
  }, [category]);
  // delete handle
  const deleteHandle = (id) => {
    const filteredItems = products.filter((item) => item.id !== id);
    setProducts(filteredItems);
  };
  // search
  const searchProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  if (!products.length)
    return (
      <div className="d-flex justify-content-center">
        <InfinitySpin width="200" color="#4834d4" />
      </div>
    );
  return (
    <Container>
      <div className="products-container">
        {/* search */}
        <input
          className="search"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* filter */}
        <Form.Select
          className="m-auto"
          size="sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "150px" }}
        >
          <option>All</option>
          <option>jewelery</option>
          <option>electronics</option>
          <option>men's clothing</option>
          <option>women's clothing</option>
        </Form.Select>

        {searchProducts.map((item) => (
          <Product key={item.id} data={item} deleteHandle={deleteHandle} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsList;
