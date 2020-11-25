import React from "react";
import { Link } from "react-router-dom";
const Dinero= () => {
  return (
    <div>
      <div className="Titulo">
       DINERO
      </div>
      <div className="Caretip">
        <h1>
          <img src="data:image/png;base64,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" 
          alt="" 
          height="80px"/>
        </h1>
        <h3>
          <b>Bienvenido a Dinero</b>
        </h3>
        <br></br>
        Si analizas los desaciertos en las decisiones financieras que has estado tomando, 
        te aseguro que encontrarás algunas emociones que te han hecho sabotaje.  
        Si estás preocupada, avergonzada, si sientes envidia o culpa, 
        te recomiendo que tomes en cuenta las opciones lógicas antes de actuar por emociones<br></br>
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
export default Dinero;