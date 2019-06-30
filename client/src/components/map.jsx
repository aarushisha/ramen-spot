import React from 'react';
import GoogleMapReact from 'google-map-react';
import googleKey from '../../../google.js';
import Marker from "./marker.jsx";

const Map = (props) => {
  return (
  <div style={{ height: '50vh', width: '35%' }} id="map">
  <GoogleMapReact
    bootstrapURLKeys={{ key: googleKey, libraries: ['places', 'directions'] }}
    center={[props.latitude, props.longitude]}
    defaultZoom={11}
    yesIWantToUseGoogleMapApiInternals
  >
  {props.restaurants.map((restaurant, id) => (
    <Marker text="My Marker" key={id} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} current="false"/>

  ))}
  
  
  
  
  </GoogleMapReact>

  </div>
  )

}

export default Map;