import React from 'react'

function BoxColor(props) {

    let style = {
        backgroundColor: `rgb{props.red},{props.green},{props.blue}`,

    }
  return (
    <div style={style}>
        <p>(<span>r={props.red}</span><span>g={props.green}</span><span>b={props.blue}</span>)</p>
       

    </div>
  )
}

export default BoxColor