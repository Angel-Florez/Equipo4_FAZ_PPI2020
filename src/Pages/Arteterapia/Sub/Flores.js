import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          Paleta 1
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Paleta 2
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Paleta 3
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified">
          Paleta 4
        </ToggleButton>
      </ToggleButtonGroup>
      <hr/>
      <div id="Paletaflor">
        <img src ="./img-ejemplos/ejemplo1.png" alt="#" width="470px"/>
      </div>
      <Link to="/Arteterapia">
        <Button
          orientation="horizontal"
          aria-label="vertical contained primary button group"
          variant="contained">
          Regresar
        </Button>
      </Link>
    </>
  );
}
