import React from 'react';
import GoogleMapReact from 'google-map-react';
// import googleKey from '../../../google.js';
import Marker from "./marker.jsx";

const googleKey = process.env.GOOGLEKEY;

const Map = (props) => {
  return (
  <div style={{ height: '50vh', width: '35%' }} id="map">
  <GoogleMapReact
    bootstrapURLKeys={{ key: googleKey, libraries: ['places', 'directions'] }}
    center={[props.latitude, props.longitude]}
    defaultZoom={13}
    onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
    yesIWantToUseGoogleMapApiInternals
  >
  <div id="current-marker">
  {[props.latitude].map( (latitude, id) => (
    <Marker 
    text="*"
    lat={props.latitude}
    lng={props.longitude}/>
  ))}
  </div>
      {props.restaurants.map((restaurant, id) => (
        <Marker
        key={id}
        text={restaurant.name}
        lat={restaurant.coordinates.latitude} 
        lng={restaurant.coordinates.longitude}
        curent="false"/>
      ))}
  </GoogleMapReact>
  </div>
  )

}

export default Map;