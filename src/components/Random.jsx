import React from "react";
import './Random.css'


function Random({min, max }) {
let randomInteger;
randomInteger = Math.floor(Math.random() * (max-min +1)) + min;
    return (
        <div className="random-integer">
     <p>Random value between {min} and {max} => {randomInteger}</p>
 </div>
    )
}

export default Random;