import { Component } from "react";
import "./Random.css"
const operator = "=>";

const RandomNumber = ({ min, max }) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="random">
            {`Random value between ${min} and ${max} ${operator} ${randomNum}`}
        </div>
    );
};
export default RandomNumber