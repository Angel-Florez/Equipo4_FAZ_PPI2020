import React from "react";
import "./Caretips.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "/src/Components/Navbar.js";
import { Link } from "react-router-dom";
const Caretips = () => {
  return (
    <div className="Caretips">
      <Nav />
      <font size="15" face="Times new roman">
        <b>CareTips</b>
      </font>
      <h2>Escoge una categoría</h2>
      <Link to="/Arte">
        <div id="Arte">
          <img src="./img-caretips/ArteCart (2).png" alt="" />
        </div>
      </Link>
      <Link to="/Flr">
        <div id="Flor">
          <img src="./img-caretips/Flor.png" alt="" />
        </div>
      </Link>
      <Link to="/Entret">
        <div id="Entre">
          <img src="./img-caretips/Entre (2).png" alt="" />
        </div>
      </Link>
      <Link to="/Musica">
        <div id="Musica">
          <img src="./img-caretips/Musica.png" alt="" />
        </div>
      </Link>
      <Link to="/Rosca">
        <div id="Rosca">
          <img src="./img-caretips/Rosca.png" alt="" />
        </div>
      </Link>
      <Link to="/Auto">
        <div id="Auto">
          <img src="./img-caretips/Auto.png" alt="" />
        </div>
      </Link>
      <Link to="/Dinero">
        <div id="Dinero">
          <img src="./img-caretips/Dinero.png" alt="" />
        </div>
      </Link>
      <Link to="/Molecula">
        <div id="Molecula">
          <img src="./img-caretips/Molecula.png" alt="" />
        </div>
      </Link>
      <div id="Cerebro">
        <img src="./img-caretips/Cerebro.png" alt="" />
      </div>
    </div>
  );
};
//<Route exact path="/" component={Arte} />
//<Route path="/CareTips" component={Arte} />
export default Caretips;
