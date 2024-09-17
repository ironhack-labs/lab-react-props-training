import React from "react";

export default function IdCard(props) {
  return (
    <div className="contenedor">

      <div>
        <img src={props.picture} alt="imagen" />
      </div>

      <div className="contenido">

      <div>
        <b>FirstName:</b> <span>{props.firstName}</span>
      </div>

      <div>
        <b>LastName:</b> <span>{props.lastName}</span>
      </div>

      <div>
        <b>Gender:</b>
        <span>{props.gender}</span>
      </div>

      <div>
        <b>Height:</b>
        <span>{props.height}</span>
      </div>

      <div>
        <b>Birth:</b>
        <span>{props.birth.toLocaleDateString()}</span>
      </div>

      </div>

    </div>
  );
}
