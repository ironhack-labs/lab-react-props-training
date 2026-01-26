import React from "react";
import './boxColor.css'

function BoxColor() {
    const getRandomValue = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const r = getRandomValue(0, 255);
    const g = getRandomValue(0, 255);
    const b = getRandomValue(0, 255);

    return (
        <div className="boxColor" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <p>Random background color: rgb({r}, {g}, {b})</p>
        </div>
    );
}

export default BoxColor;