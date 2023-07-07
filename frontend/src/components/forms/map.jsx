import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyComponent() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

const Map = ({ value, onChange }) => {
  return (
    <MapContainer
      //   className="map"
      style={{ height: "45vh", zIndex: "-1" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <MyComponent />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
