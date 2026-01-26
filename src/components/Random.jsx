import React from 'react'
import "../index.css";

export const Random = ({min, max}) => {
  return <div className='greet'>Random value between {min} and {max} : {randomInteger(min, max)} </div>
  
}

function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
