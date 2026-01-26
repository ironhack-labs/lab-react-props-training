import React from "react";

const Random=({min,max})=>{
    const randomValue=Math.floor(Math.random() * (max-min+1))+min;
    return <div className='random-box'>Random Value between {min} and {max} = {randomValue}</div>

};
export default Random;