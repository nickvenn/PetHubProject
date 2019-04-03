// "AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY"

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 59.955413,
        lng:30.337844
      },
      zoom: 11
    }
  }
 
  componentDidMount = () => {
    console.log(this.props.lat + " " + this.props.lng);
    this.setState({
      lat: this.props.lat,
      lng: this.props.lng
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC8NiCJndcIn85_FDZyrsNSCwKpXYEddCY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }

};
 
export default SimpleMap;