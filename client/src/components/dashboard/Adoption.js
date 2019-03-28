import React, { Component } from "react";
import Container from "../layout/Containter";


class Adoption extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    const url = 'https://api.thedogapi.com/v1/breeds'
    fetch(url).then(response => response.json()).then(data => console.log(data));
  }

  render() {
    return (
      <Container>
      </Container>
    );
  }
}

export default Adoption;
