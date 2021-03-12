// imports 
import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom"
// compent imports
import Map from "./components/map";
import RestInfo from "./components/restaurants.js";

function App(props) {
  

  return (
    <div id="mainContainer">
      <h1>Yelpington</h1>
     <Switch>
       <Route exact path = "/">
         <Map/>
       </Route>
       <Route path = "/" component = {RestInfo}/>
     </Switch>
    </div>
  );
}

export default App;
