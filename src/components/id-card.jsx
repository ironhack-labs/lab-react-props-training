import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="d-flex align-items-center border border-dark p-2 mb-3b-3 gap-3 container w-50 mx-auto mt-3">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p className="mb-1"><strong>First name:</strong> {firstName}</p>
        <p className="mb-1"><strong>Last name:</strong> {lastName}</p>
        <p className="mb-1"><strong>Gender:</strong> {gender}</p>
        <p className="mb-1"><strong>Height:</strong> {height}cm</p>
        <p className="mb-1"><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;  
