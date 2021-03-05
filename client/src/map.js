//Imports

import { MapContainer, TileLayer, Marker } from "react-leaflet";

// Function to render the map
export default function Map() {
  const position = [44.64645495, -73.30783472];

  return (
    <div id="mapContainer">
      <MapContainer center={position} zoom={12} dragging={false}>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
      </MapContainer>
    </div>
  );
}
