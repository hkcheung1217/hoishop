import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Product = ({ product, pageNumber }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <div>
        <Link to={`/page/${pageNumber}/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
      </div>
      <Card.Body>
        <Link to={`/page/${pageNumber}/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            rating={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
