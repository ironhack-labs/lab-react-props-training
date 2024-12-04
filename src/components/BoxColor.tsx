import React from "react";

function BoxColor(prop) {
  const bgOnDisplay =`rgb(${prop.r},${prop.g},${prop.b})`
    return (
        
        <div style={{border: "1px solid #ccc",background:bgOnDisplay, padding: "10px", margin: "10px", borderRadius: "5px", textAlign: "center"}}>
            <strong>{bgOnDisplay}</strong>
        </div>
        
    )
}
export default BoxColor;