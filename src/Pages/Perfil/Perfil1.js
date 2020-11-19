import React from "react";
import "./Perfil.css";
import { Link } from "react-router-dom";
import Nav from "/src/Components/Navbar.js";

export default function Perfil() {
  return (
    <div className="Perfil1">
      <Nav />
      <div className="parte-arriba">
        <button className="tuerca">
          <img
            src="https://1.bp.blogspot.com/-24e9mUDhlZw/X2AZzw5Bl4I/AAAAAAAAP0w/EBNhMU49RvI88EpU06o7PJ7kIil_Yc2ZQCLcBGAsYHQ/s58/tuerca.jpg"
            alt=""
            height="40px"
          />
        </button>
        <img
          className="perfil"
          src="https://1.bp.blogspot.com/-YrxuW-wz-RQ/X2AVYvzjzYI/AAAAAAAAP0k/znVuFiPw3Gkv_P4-rrcPzG5FYlaaF8evgCLcBGAsYHQ/s110/perfil.jpg"
          alt=""
          height="10px"
        />
        <div>
          <label >Tu nombre</label>
          <input type="email" class="form-control" placeholder="Nombre" />
        </div>
        <div>
          <label>Tu edad</label>
          <input type="number" class="form-control" placeholder="Edad" />
        </div>
        <hr />
        <Link to="/">
          <button>Cerrar sesión</button>
        </Link>
      </div>
      {/*
      <div className="parte-abajo">
        <label></label>
        <input
          className="nombre"
          id="nombre"
          name="nombre"
          placeholder="TU NOMBRE"
          type="text"
        />

        <div />
        <input
          className="edad"
          id="edad"
          name="edad"
          placeholder="EDAD"
          type="number"
        />
        <div className="barra">
          <img src="" alt="" height="" />
          <Link to="/">
            <button>Cerrar sesión</button>
          </Link>
        </div>
      </div>
      */}
    </div>
  );
}
