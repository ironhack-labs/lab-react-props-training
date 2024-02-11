import React from "react";


function Random({min, max}) {

    const randomNumber = Math.floor(Math.random() * (max-min +1) + min);

    return(
        <>
        <div className="random-number">
            Random number :{randomNumber}

        </div>
        </>
    )

}

export default Random;