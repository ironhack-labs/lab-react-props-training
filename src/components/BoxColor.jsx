import React from 'react'

function BoxColor(props) {

    const colorRGB = `rgb(${props.r} ,${props.g} ,${props.b})`
    return (
        <div id='color-container' style={{backgroundColor:colorRGB, height:"50px", width:"200px"}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor;