import React from "react";
import { Link } from "react-router-dom";
const Arte = () => {
  return (
    <div>
      <div className="Titulo">ARTE</div>
      <div className="Caretip">
        <h1>
          <img src="./imagenes/ImagenArte.png" alt="" />
        </h1>
        <h3>
          <b>Bienvenido a Arte</b>
        </h3>
        <br></br>
        Hay una serie de actividades que han demostrado incrementar la
        creatividad a corto, medio y largo plazo.<br></br>
        <br></br>
        <h3>
          <b>¿Te atreves a realizarlo?</b>
        </h3>
      </div>
      <Link to="/Caretips">
        <button className="boton1">Regresar</button>
      </Link>
    </div>
  );
};
export default Arte;
