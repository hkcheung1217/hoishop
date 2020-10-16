import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../../Product/Product";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import Paginate from "./../../Paginate/Paginate";
import Meta from "../../Meta/Meta";
import ProductCarousel from "../../ProductCarousel/ProductCarousel";
import { listProducts } from "../../../redux/actions/productAction";
import { PRODUCT_DETAILS_RESET } from "../../../redux/types/productTypes";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    dispatch({ type: PRODUCT_DETAILS_RESET });
  }, [dispatch, keyword, pageNumber]);

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
      <Meta />
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
