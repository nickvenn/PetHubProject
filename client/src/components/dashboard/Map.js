//'AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY'
import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
require('dotenv').config();

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    this.state = {
      
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
}
  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
  
    render() {
      return (
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >        
        <Marker onClick={this.onMarkerClick} name={this.props.Name} position={{lat: this.props.Latitude, lng: this.props.Longitude}} /> 
          {/* {this.props.pets ? this.props.pets.map(p => 
          <Marker onClick={this.onMarkerClick} name={p.Name} position={{lat: p.Latitude, lng: p.Longitude}} /> 
          ): console.log("no pets yet!")} */}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      );
    }
  
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY'
})(MapContainer);