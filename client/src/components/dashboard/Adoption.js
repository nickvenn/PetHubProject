import React, { Component } from "react";
import Container from "../layout/Containter";
import API from "../../utils/API";
import Form from "../layout/Form";
import Card from "../layout/Card";
import Animal from "../layout/Animal";
import { List } from "../layout/List";
import { Button, Modal } from 'react-bootstrap';
import "../layout/Modal/ModalCSS.css";
import Map from "../dashboard/Map"


class Adoption extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      pets: [],
      zipcode: "",
      PetType: "Dog",
      Gender: "Male",
      message: "no pets were found",
      Clicked: false,
      show: false,
    };

  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ Clicked: true });
    this.getDogs();
  };

  GetLatitue = () =>{
  }

  getDogs = () => {
    API.GetDogs(this.state.zipcode, this.state.Gender, this.state.PetType)
      .then(res => {
        console.log(res.data[0].Latitude);
        this.setState({
          pets: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  render() {

    const Resclicked = this.state.Clicked;
    let results;
    if (Resclicked) {
      results =
        <Container>
          <Card title="Results">
            {this.state.pets.length ? (
              <List>
                {this.state.pets.map(pet => (
                  <Animal
                    key={pet.PetId}
                    name={pet.Name}
                    gender={pet.Gender}
                    type={pet.PetType}
                    photo={pet.PrimaryPhotoUrl}
                    Site={pet.ProfileUrl}
                    Lat={pet.Latitude}
                    Lng={pet.Longitude}
                    show={this.state.show}
                    hideModal={this.hideModal}
                    showModal={this.showModal}
                  />
                ))}
              </List>
            ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
          </Card>
        </Container>
    }
    return (
      <div>
        <Container>
          <Button variant="secondary" onClick={this.handleShow}>
            open map
            </Button>
          <Modal
            className="Modal"
            show={this.state.show}
            onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="Modal-Body"><Map></Map></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </Modal>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            q={this.state.q}
          />
        </Container>
        {results}

      </div>
    );
  }
}

export default Adoption;
