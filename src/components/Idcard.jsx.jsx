import React from 'react';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="info">
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <p>Gender: {gender}</p>
        <p>Height: {height} m</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
