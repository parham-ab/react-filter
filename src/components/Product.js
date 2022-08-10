import React from "react";
import { Badge, Container } from "react-bootstrap";
// bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// icons
import { BsTrashFill, BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

const Product = ({
  data,
  deleteHandle,
  incrementHandle,
  decrementHandle,
  //   changeHandle,
  //   titleVal,
}) => {
  const { id, title, price, quantity } = data;

  return (
    <Container>
      <Card className="m-5">
        <Card.Body className="d-flex justify-content-around align-items-center flex-md-row flex-column">
          <Card.Title>Product: {title}</Card.Title>
          <Card.Text>
            <Badge pill bg="secondary">
              {quantity}
            </Badge>
          </Card.Text>
          <Card.Text>
            <Badge pill bg="secondary">
              {price}
            </Badge>
          </Card.Text>
          <div className="d-flex justify-content-around align-items-center">
            <div className="mx-4">
              <AiFillMinusCircle className="quantity-icon decrement" onClick={decrementHandle} />
              <BsFillPlusCircleFill className="quantity-icon increment" onClick={incrementHandle} />
            </div>
            <div>
              <Button variant="outline-danger" onClick={deleteHandle}>
                <BsTrashFill />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* <input value={titleVal} type="text" onChange={changeHandle} /> */}
    </Container>
  );
};

export default Product;
