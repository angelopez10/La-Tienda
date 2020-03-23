import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';





class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{latitude: -33.448891, longitude: -70.669266},
        {latitude: -33.448891, longitude: -70.669266},
              {latitude: -33.448891, longitude: -70.669266},
              {latitude: -33.448891, longitude: -70.669266},
              {latitude: -33.448891, longitude: -70.669266},
              {latitude: -33.448891, longitude: -70.669266}]
    }
  }





  static defaultProps = {
    center: {
      lat: -33.448891,
      lng: -70.669266
    },
    zoom: 13
  };


  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }





  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDrJx4thHq6csImpMoRlB8qy00-GQuhIQw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         {this.displayMarkers}
        
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;