
import React from "react";

let newDate = new Date();
let dia = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let fecha = dia + '/' + month  + '/' + year;

 
const Note = props => {
  const {
    item,
    fadd = fecha,
      ...restProps
    } = props;

  return (
    console.log(item + fadd),
    <div {...restProps} className="note">
      <h3> {item || ""} </h3>
      <h6>{fadd}</h6>
    </div>
  );
};

export default Note;
