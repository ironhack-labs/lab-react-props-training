import React from "react";

function BoxColor({r,g,b}){

    const color = 'rgb(${r}, ${g}, ${b})';



    const boxStyle  = {
        backgroundColor: color,

        width: '200px',
        height: '100px',
        border: '1px solid black',
    };
    return (
        <div className="box" style={boxStyle}>
          <p>RGB: {color}</p>
        </div>
      );
}

export default BoxColor;