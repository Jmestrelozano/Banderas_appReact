import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "../Components/Navbar";
import { Buscador } from "../Components/Buscador";
import BuscadorRegion from "../Components/BuscadorRegion";
import BanderaList from "../Components/BanderaList";
import { InfoBanderas } from "../views/InfoBanderas";

const AppRouter = () => {
  return (
    <Router basename="/react" >
      <div>
        <Navbar />
        
        <Route  path="/bandera">
        <div className="contenedor-buscador">
          <Buscador /> <BuscadorRegion />
        </div>
          <BanderaList/></Route>
        <Switch>
          <Route exact path="/InfoBanderas/:name" component={InfoBanderas} />
        </Switch>
        <Redirect exact to="/bandera" />
      </div>
    </Router>
  );
};

export default AppRouter;
