import React from "react";

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    return <div>
        <div><h2>{type}</h2></div>
        <h4>{number}</h4>
        <p>{expirationMonth}</p>
        <p>{expirationYear}</p>

    </div>;
};

export default CreditCard;
