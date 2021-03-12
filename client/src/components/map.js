//Imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {useState, useEffect} from "react"

// Function to render the map
export default function Map() {
  const [center, setCenter] = useState([44.67799602, -73.23253221]);

  const [zoom, setZoom] = useState({
    zoomIn: false,
    zoom: 13,
    center: [44.67799602, -73.23253221],
  });
  return (
    <div id="mapContainer">
      <MapContainer center={center} zoom={zoom} dragging={false} style = {{height:"500px", width:"500px"}}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
