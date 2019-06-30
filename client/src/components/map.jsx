import React from 'react';
import GoogleMapReact from 'google-map-react';
import googleKey from '../../../google.js';

const Map = (props) => {
  return (
  <div style={{ height: '50vh', width: '35%' }} id="map">
  <GoogleMapReact
    bootstrapURLKeys={{ key: googleKey, libraries: ['places', 'directions'] }}
    defaultCenter={[37.7749, -122.419]}
    defaultZoom={11}
    yesIWantToUseGoogleMapApiInternals
  ></GoogleMapReact>

  </div>
  )

}

export default Map;