import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Route from "react-router-dom/Route";
import { BrowserRouter } from "react-router-dom";
import Diario from "./Pages/MiDiario/Diario.js";
import Arteterapia from "./Pages/Arteterapia/Arteterapia.js";
import Caretips from "./Pages/Caretips/Caretips.js";
import Perfil from "./Pages/Perfil/Perfil1.js";
import Emociones from "./Pages/Emociones/Emociones.js";
import Login from "./Pages/Login/Login.js";
import Flores from "./Pages/Arteterapia/Sub/Flores.js";
import Animales from "./Pages/Arteterapia/Sub/Animales.js";
import Azteca from "./Pages/Arteterapia/Sub/Azteca.js";
import Misc from "./Pages/Arteterapia/Sub/Misc.js";
import Previos from "./Pages/Arteterapia/Sub/Previos.js";
import Arte from "./Pages/Caretips/Tips/Arte.js";
import Auto from "./Pages/Caretips/Tips/Auto.js";
import Dinero from "./Pages/Caretips/Tips/Dinero.js";
import Entret from "./Pages/Caretips/Tips/Entret.js";
import Flor from "./Pages/Caretips/Tips/Flor.js";
import Molecula from "./Pages/Caretips/Tips/Molecula.js";
import Musica from "./Pages/Caretips/Tips/Musica.js";
import Rosca from "./Pages/Caretips/Tips/Rosca.js";
import Registro from "./Pages/Registro/Registro.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/Arteterapia">
              <Arteterapia />
            </Route>
            <Route path="/Caretips">
              <Caretips />
            </Route>
            <Route path="/Mi_Diario">
              <Diario />
            </Route>
            <Route path="/Perfil">
              <Perfil />
            </Route>
            <Route path="/Emociones">
              <Emociones />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/Flores">
              <Flores />
            </Route>
            <Route path="/Animales">
              <Animales />
            </Route>
            <Route path="/Azteca">
              <Azteca />
            </Route>
            <Route path="/Misc">
              <Misc />
            </Route>
            <Route path="/Previos">
              <Previos />
            </Route>
            <Route path="/Molecula">
              <Molecula />
            </Route>
            <Route path="/Rosca">
              <Rosca />
            </Route>
            <Route path="/Arte">
              <Arte />
            </Route>
            <Route path="/Auto">
              <Auto />
            </Route>
            <Route path="/Dinero">
              <Dinero />
            </Route>
            <Route path="/Entret">
              <Entret />
            </Route>
            <Route path="/Registro">
              <Registro />
            </Route>
            <Route path="/Flr">
              <Flor />
            </Route>
            <Route path="/Musica">
              <Musica />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
