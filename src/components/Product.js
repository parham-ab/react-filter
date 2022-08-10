import React from "react";
import { Badge, Container } from "react-bootstrap";
// functions
import { shortener } from "../functions/shortener";
// bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// icons
import { BsTrashFill } from "react-icons/bs";

const Product = ({ data, deleteHandle }) => {
  const { id, title, price, count } = data;

  return (
    <Container>
      <Card className="m-5">
        <Card.Body className="d-flex justify-content-between align-items-center flex-md-row flex-column">
          <Card.Title>Product: {shortener(title)}</Card.Title>
          <Card.Text>
            <Badge pill bg="secondary">
              {count}
            </Badge>
          </Card.Text>
          <Card.Text>
            <Badge pill bg="secondary">
              {price}
            </Badge>
          </Card.Text>

          <div>
            <Button variant="outline-danger" onClick={() => deleteHandle(id)}>
              <BsTrashFill />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Product;
