import React from "react";
import { Link } from "react-router-dom";
const Auto = () => {
  return (
    <div>
      <div className="Titulo">AUTO</div>
      <div className="Caretip">
        <h1>
          <img
            src="https://lh3.googleusercontent.com/-CyhYnLooPWA/X6DMdlLeigI/AAAAAAAAAH0/Vk9ctYsbLWws_P9JnkdOk0Uzk0RtTjkDACNcBGAsYHQ/image.png"
            alt=""
            height="80px"
          />
        </h1>
        <h3>
          <b>Bienvenido a Auto</b>
        </h3>
        <br></br>
        Encuentra la postura y si estás cansado para y descansa Evita
        distracciones y concéntrate al volante Aprovecha las inercias..<br></br>
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
export default Auto;
