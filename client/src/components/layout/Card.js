import React from "react";
import { Card,Button } from 'react-bootstrap';


function myCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.Photo} />
      <Card.Body>
        <Card.Title>{props.Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.Gender}</Card.Subtitle>
        <Card.Text>  
        <b>Breed: </b>{props.Breed} 
        <br></br>
        <b>Age: </b>{props.Age} years {props.Months} months    
        <br></br>
        {props.City}, {props.State}
        </Card.Text>
        <Button type="submit" onClick={() => {props.handleAnimalClick(props.Lng, props.Lat,props.Name) }}>Map</Button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
      <Card.Link variant="primary" href={props.Site} target="_blank">Details</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default myCard;
