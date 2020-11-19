import React from "react";
import { Link } from "react-router-dom";
const Molecula= () => {
  return (
    <div>
      <div className="Titulo">
        MOLECULA
      </div>
      <div className="Caretip">
        <h1>
          <img src="https://previews.123rf.com/images/dmstudio/dmstudio1301/dmstudio130100001/17100785-abstracto-icono-ciencia-del-%C3%A1tomo.jpg" 
          alt=""
          height="80px" />
        </h1>
        <h3>
          <b>Bienvenido a Molecula</b>
        </h3>
        <br></br>
        Busca momentos específicos del día para actualizarte sobre la situación
        Protégete y apoya a los demás.<br></br>
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
export default Molecula;