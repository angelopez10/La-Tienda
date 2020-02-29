import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.448891,
      lng: -70.669266
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDrJx4thHq6csImpMoRlB8qy00-GQuhIQw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;