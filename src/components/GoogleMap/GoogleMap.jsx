import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  //   Marker,
} from "react-google-maps";

// const key = process.env.GOOGLE_MAPS_KEY;

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    ></GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMapComponent = () => {
  return (
    <div style={{ width: "50vw", height: "50vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBSgkPpf1nlv91xu9gO5D-gURtirUOBf4A&v=3.exp&libraries=geometry,drawing,places`}
        // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default GoogleMapComponent;

// ${process.env.REACT_APP_MAPS_KEY}