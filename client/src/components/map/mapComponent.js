import React from 'react';
import { compose, withProps } from "recompose";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapComponent = compose(
  withProps({
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => {
  // 701 S Miami Ave, Miami, FL 33130
  let position = props.position || { lat: -80.19308050000001, lng: 25.7671641 };

  return (
      <div>
        <GoogleMap
          defaultZoom={17}
          center={position}
        >
          {props.isMarkerShown && <Marker position={position} />}
        </GoogleMap>
      </div>
    )
  }
)

export default MapComponent;
