import React from "react";
import { Link } from "react-router-dom";
const Musica= () => {
  return (
    <div>
      <div className="Titulo">
        MUSICA 
      </div>
      <div className="Caretip">
        <h1>
          <img src="data:image/jpeg;base64,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" 
          alt=""
          height="100px" />
        </h1>
        <h3>
          <b>Bienvenido a Musica</b>
        </h3>
        <br></br>
        puedes escuchar musica tranquila para cuando estas en un
        estado de alteracion o cuando te sientas feliz refuerza esa 
        emocion con tu cancion favorita y te sentiras genial.<br></br>
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
export default Musica;