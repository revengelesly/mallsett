import React from 'react';
import { compose, withProps } from "recompose";
import { Row, Col, Button } from 'antd';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import LocationSearchInput from './locationSearchInput';

const MapComponent = compose(
  withProps({
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)((props) => {
  let position = props.position || { lat: -34.397, lng: 150.644 };

  return (
      <div>
        <GoogleMap
          defaultZoom={8}
          center={position}
        >
          {props.isMarkerShown && <Marker position={position} />}
        </GoogleMap>
      </div>
    )
  }
)

export default MapComponent;
