import "./App.css";
import {useState} from "react"
import Header from "./components/Header.js";
import Map from "./components/map";
import Info from "./components/info.js"

function App() {
  const[center, setCenter] = useState([44.67799602,-73.23253221]);
  
  const [zoom, setZoom] = useState(13)
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
