import React from "react";
import "./IdCard.css";

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="IdCard-info">
        <p><strong>Nombre:</strong> {firstName}</p>
        <p><strong>Apellido:</strong> {lastName}</p>
        <p><strong>Género:</strong> {gender}</p>
        <p><strong>Altura:</strong> {height} cm</p>
        <p><strong>Fecha de nacimiento:</strong> {birth.toLocaleDateString("es-ES")}</p>
      </div>
    </div>
  );
}

export default IdCard;
