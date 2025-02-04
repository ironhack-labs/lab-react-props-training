import React from "react";

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (

        <div className="container">
            <div className="text-cont">
                
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height} cm</p>
            <p><strong>Date of Birth:</strong> {birth}</p>

            </div>
            <div className="img-cont">
            <img src={picture} alt={firstName} className="img" />
            </div>
            
        </div>
    );
};

export default IdCard;
