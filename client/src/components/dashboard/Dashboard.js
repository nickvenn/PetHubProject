import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Container from "../layout/Containter";
import API from "../../utils/API";
import Form from "../layout/Form";
import { List } from "../layout/List";
import Card from "../layout/Card";
import { Modal, Row } from 'react-bootstrap';
import { Jumbotron } from 'reactstrap';
import "../layout/Modal/ModalCSS.css";
import Map from "../dashboard/Map"
import "../css/Adoption.css";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      pets: [],
      Radius:"150",
      zipcode: "",
      PetType: "Dog",
      Gender: "Male",
      Lat: "",
      Lng: "",
      Name: "",
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

  // GetCord = () => {
  //   // eslint-disable-next-line array-callback-return
  //   return this.state.pets.map(item => {
  //     var pets = { Latitude: item.Latitude, Longitude: item.Longitude, Name: item.Name };
  //     return pets
  //   });
  // }

  handleAnimalClick = (lng, lat, name) => {
    this.setState({ Lat: lat, Lng: lng, Name: name })
    this.handleShow();
  };

  getDogs = () => {
    API.GetDogs(this.state.zipcode, this.state.Radius,this.state.Gender, this.state.PetType)
      .then(res => {
        this.setState({
          pets: res.data
        })
        console.log(res.data);
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
          {this.state.pets.length ? (
            <List>
              <Row>
                {this.state.pets.map(pet => (
                  <Card
                    key={pet.PetId}
                    Name={pet.Name}
                    Gender={pet.Gender}
                    Type={pet.PetType}
                    Photo={pet.PrimaryPhotoUrl}
                    Site={pet.ProfileUrl}
                    Breed={pet.BreedsForDisplay}
                    Age={pet.AgeYears}
                    Months={pet.AgeMonths}
                    City={pet.City}
                    State={pet.State}
                    Lat={pet.Latitude}
                    Lng={pet.Longitude}
                    handleAnimalClick={this.handleAnimalClick}
                  />
                ))}
              </Row>
            </List>
          ) : (
              <h2 className="text-center">{this.state.message}</h2>
            )}
        </Container>
    }
    return (
      <div>
        <Container>
          <Modal
            className="Modal"
            show={this.state.show}
            onHide={this.handleClose}>
            <Modal.Body className="Modal-Body">
              {/* <Map pets={this.GetCord()}>
                  </Map> */}
              <Map Latitude={this.state.Lat} Longitude={this.state.Lng} Name={this.state.Name}></Map>
            </Modal.Body>
          </Modal>
          <Jumbotron>
            <h1 className="display-3">Search for a Pet</h1>
          </Jumbotron>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Container>
        {results}

      </div>
    );
  }

}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);