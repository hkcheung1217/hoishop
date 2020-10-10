import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../../Product/Product";
import { listProducts } from "../../../redux/actions/productAction";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import { PRODUCT_DETAILS_RESET } from "../../../redux/types/productTypes";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
    dispatch({ type: PRODUCT_DETAILS_RESET });
  }, [dispatch]);

  // For local setting without database
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await axios.get("/api/products");
  //     setProducts(res.data);
  //   };

  //   fetchProducts();
  // }, []);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
