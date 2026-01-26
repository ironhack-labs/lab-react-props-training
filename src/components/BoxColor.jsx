

function BoxColor(props)  { 
    //const { r, g, b } = props; 
    //const backgroundColor = `rgb(${r}, ${g}, ${b})`; 

    const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`

    const boxStyle = { 
        backgroundColor: backgroundColor, 
        width: '200px', 
        height: '100px',
     };
      return ( 
      <div style={boxStyle}> 
      rgb({props.r}, {props.g}, {props.b}) </div> 
      ); 
    }

export default BoxColor