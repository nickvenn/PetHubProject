import React from "react";
import { ListItem } from "../layout/List";
import { Row, Col } from "../layout/Grid";

function Book({ name, type, gender, photo }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{name}</h3>
          <h3 className="font-italic">{type}</h3>
          <h3 className="font-italic">{gender}</h3>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={photo} alt={photo} />
        </Col>
        <Col size="12 sm-8 md-10">
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
