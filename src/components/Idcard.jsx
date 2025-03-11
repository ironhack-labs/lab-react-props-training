import React from "react";

const IdCard=({firstName,lastName,gender,height,birth,picture})=>{
    return(
      <div className="id-card">
      <img src={picture} alt="picture" className="id-card-image"/>
      <div className="id-card-info">
        <p><strong>Last Name:</strong>{lastName}</p>
        <p><strong>First Name:</strong>{firstName}</p>
        <p><strong>Gender:</strong>{gender}</p>
        <p><strong>Height:</strong>{height}</p>
        <p><strong>Birth:</strong>{birth instanceof Date ? birth.toDateString() : String(birth)}</p>
      </div>
      </div>

    );
};
export default IdCard;