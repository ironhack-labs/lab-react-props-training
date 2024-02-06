// src/components/IdCard.jsx

import React from 'react';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  };

  return (
    <div style={cardStyle}>
      <img src={picture} alt="profile" style={imgStyle} />
      <div>
        <strong>Name:</strong> {firstName} {lastName}
      </div>
      <div><strong>Gender:</strong> {gender}</div>
      <div><strong>Height:</strong> {height}cm</div>
      <div><strong>Birth:</strong> {birth.toDateString()}</div>
    </div>
  );
}

export default IdCard;
