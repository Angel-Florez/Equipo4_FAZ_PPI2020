import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Navbar.css";
class Navbar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  };
  render() {
    return (
      <nav
        className="navbar navbar-expand bg-light navbar-light fixed-bottom"
        role="navigation"
      >
        <div className="nav navbar-header ">
          <ul className="navbar-nav navbar-center" id="Driving">
            <li className="nav-item">
              <NavLink to="/Perfil">
                <img src="imagenes/Perfil.png" alt=""></img>
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav navbar-center" onclick="geoFindMe_2()">
            <li className="nav-item">
              <NavLink to="/Emociones">
                <img src="imagenes/Emociones.png" alt=""></img>
              </NavLink>
            </li>
          </ul>
          <ul
            className="navbar-nav navbar-center"
            onclick="posicionar_TopNav_Alcance()"
          >
            <li className="nav-item">
              <NavLink to="/Mi_Diario">
                <img src="imagenes/Diario.png" alt=""></img>
              </NavLink>
            </li>
          </ul>
          <ul
            className="navbar-nav navbar-center"
            onclick="posicionar_TopNav_Alcance()"
          >
            <li className="nav-item">
              <NavLink to="/CareTips">
                <img src="imagenes/Cartips.png" alt=""></img>
              </NavLink>
            </li>
          </ul>
          <ul
            className="navbar-nav navbar-center"
            onclick="posicionar_TopNav_Alcance()"
          >
            <li className="nav-item">
              <NavLink to="/Arteterapia">
                <img src="imagenes/Arterapia.png" alt=""></img>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Navbar = withRouter(Navbar);
export default Navbar;
