import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

function myForm({ Radius, zipcode, PetType, Gender, handleInputChange, handleFormSubmit }) {
  return (
    <Form
      onSubmit={handleFormSubmit}>
      <Row
        style={{
          paddingTop: '25px',
        }}>
        <Col>
        <label>Zip Code</label>
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
          <Col>
          <label>Distance in miles</label>
          <select
            className="form-control"
            id="Radius"
            type="text"
            value={Radius}
            name="Radius"
            onChange={handleInputChange}
            required>
            <option>50</option>
            <option>100</option>
            <option>150</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>
        <label>Pet Type</label>
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
        <label>Gender</label>
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
