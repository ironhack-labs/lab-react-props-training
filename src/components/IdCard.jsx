import React from "react";

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg flex items-center gap-4">
      <img src={picture} alt={`${firstName} ${lastName}`} className="w-24 h-24 rounded-md" />
      <div>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
