import React from "react";
import "./Emociones.css";
import Nav from "/src/Components/Navbar.js";
import { Link } from "react-router-dom";
class App extends React.Component {
  state = {
    curTime: new Date().toLocaleString()
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <h2 id="titulo">¿Cómo te sientes hoy?</h2>
        <p> Hoy es: {this.state.curTime}</p>
        <table>
          <tr>
            <td>
              <Link to="/Caretips">
                <button type="button" class="btn btn-light btn-lg btn-block">
                  Frustrado
                  <img
                    src="../img_emociones/frustrado.png"
                    alt="#"
                    id="emocion"
                  />
                </button>
              </Link>
            </td>
            <td>
              <Link to="/Caretips">
                <button type="button" class="btn btn-light btn-lg btn-block">
                  Entusiasmado
                  <img
                    src="../img_emociones/entusiasmado.png"
                    alt="#"
                    id="emocion"
                  />
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Caretips">
                <button type="button" class="btn btn-light btn-lg btn-block">
                  Enojado
                  <img
                    src="../img_emociones/enojado.png"
                    alt="#"
                    id="emocion"
                  />
                </button>
              </Link>
            </td>
            <td>
              <Link to="/Caretips">
                <button type="button" class="btn btn-light btn-lg btn-block">
                  Triste
                  <img src="../img_emociones/triste.png" alt="#" id="emocion" />
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Caretips">
                <button type="button" class="btn btn-light btn-lg btn-block">
                  Feliz
                  <img src="../img_emociones/feliz.png" alt="#" id="emocion" />
                </button>
              </Link>
            </td>
            <td>
              <Link to="/Caretips">
                <button type="button" class="btn btn-light btn-lg btn-block">
                  Asombrado
                  <img
                    src="../img_emociones/asombrado.png"
                    alt="#"
                    id="emocion"
                  />
                </button>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
