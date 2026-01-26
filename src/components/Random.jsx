import React from "react";

function Random(props) {
    const { min, max } = props;

    // Génère un entier aléatoire entre min et max (inclus)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="integer">
            <p>
                Random value between {min} and {max}  great or equals {randomNumber}
            </p>
        </div>
    );
}

export default Random;
