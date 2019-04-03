/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ListItem } from "./List";
import { Row, Col } from "./Grid";
import Modal from "./Modal";


function PetCard({ name, type, gender, photo, Site,lat, lng,show, hideModal, showModal }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{name}</h3>
          <h3 className="font-italic">{type}</h3>
          <h3 className="font-italic">{gender}</h3>
        </Col>
      </Row>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <a href="#"> <h3 className="font-italic">like this pet</h3></a>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={photo} alt={photo} />
        </Col>
        <Col size="12 sm-8 md-10">
          <form action={Site}>
            <input type="submit" value="More" />
          </form>
          <Modal show={show} handleClose={hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button type="button" onClick={showModal}>
          open
        </button>
        </Col>
      </Row>
    </ListItem>
  );
}

export default PetCard;
