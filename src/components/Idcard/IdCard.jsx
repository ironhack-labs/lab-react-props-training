import { Component } from "react";
import './IdCard.css';
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
      <div className="card">
          <img className="picture" src={picture} alt={`${firstName} ${lastName}`} />
          <div>
              <p className="info"><strong>First name:</strong> {firstName}</p>
              <p className="info"><strong>Last name:</strong> {lastName}</p>
              <p className="info"><strong>Gender:</strong> {gender}</p>
              <p className="info"><strong>Height:</strong> {height} cm</p>
              <p className="info"><strong>Birth:</strong> {birth.toLocaleDateString()}</p>
          </div>
      </div>
  );
};
export default IdCard