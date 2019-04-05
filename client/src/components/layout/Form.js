import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

function myForm({ zipcode, PetType, Gender, handleInputChange, handleFormSubmit }) {
  return (
    <Form
    onSubmit={handleFormSubmit}>
      <Row
       style={{
        paddingTop: '25px',
      }}>
        <Col>
          <input
            className="form-control"
            id="Zip"
            type="text"
            value={zipcode}
            placeholder="Zip Code"
            name="zipcode"
            onChange={handleInputChange}
            required
            padding="10px"
          />
        </Col>
        </Row>
        <Row>
        <Col>
           <select
          className="form-control"
          id="pet"
          type="text"
          value={PetType}
          name="PetType"
          onChange={handleInputChange}
          required>
          <option>Dog</option>
          <option>Cat</option>
        </select>
        </Col>
        <Col>
            <select
          className="form-control"
          id="pet"
          type="text"
          value={Gender}
          name="Gender"
          onChange={handleInputChange}
          required>
          <option>Male</option>
          <option>Female</option>
        </select>
        </Col>
      </Row>
      <Row>
      <Button type="submit">Search</Button>
        </Row>
    </Form>
   
  );
}

export default myForm;
