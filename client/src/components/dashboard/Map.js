//'AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY'
import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
export class MapContainer extends Component {
    constructor(props) {
        super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
}

componentDidMount() {
        console.log(this.props.lat);
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
          <Marker onClick={this.onMarkerClick} name={'current location'} />
          <Marker onClick={this.onMarkerClick} name={'bc'} position={{lat: 47.5844, lng: -122.1482}} />

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