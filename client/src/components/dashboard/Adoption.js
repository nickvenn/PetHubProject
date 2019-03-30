import React, { Component } from "react";
import Container from "../layout/Containter";
import API from "../../utils/API";
import Form from "../layout/Form";
import Card from "../layout/Card";
import Animal from "../layout/Animal";
import { List } from "../layout/List";


class Adoption extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pets: [],
      zipcode: "",
      PetType: "Dog",
      Gender: "Male",
      message:"no pets were found",
      Clicked: false };
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

  getDogs = () => {
    API.GetDogs(this.state.zipcode, this.state.Gender, this.state.PetType)
      .then(res => {
        console.log(res.data);
        this.setState({
          pets: res.data
        })
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    const clicked = this.state.Clicked;
    let testing;
    if (clicked) {
      testing =   
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
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
        />
      </Container>
      {testing}
</div>
    );
  }
}

export default Adoption;
