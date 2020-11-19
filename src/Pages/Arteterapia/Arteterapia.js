import React from "react";
import "./Arteterapia.css";
import { Link } from "react-router-dom";
import Nav from "/src/Components/Navbar.js";
const Main = () => (
  <>
    <div className="main">
      ArteTerapia
      <div>
        <Nav />

        <Link to="/Flores" className="link">
          <button className="mand" id="Flores">
            <span>Flores</span>
          </button>
        </Link>
        <Link to="/Animales" alt="a">
          <button className="mand" id="Animales">
            Animales
          </button>
        </Link>
        <Link to="/Azteca" alt="a">
          <button className="mand" id="Azteca">
            Azteca
          </button>
        </Link>
        <Link to="/Misc" alt="a">
          <button className="mand" id="Misc">
            Misceláneo
          </button>
        </Link>
        <Link to="/Previos" alt="a">
          <button className="mand" id="Previos">
            Mandalas previos
          </button>
        </Link>
      </div>
      <hr />
    </div>
  </>
);
export default Main;
