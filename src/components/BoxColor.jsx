function BoxColor(props){
    const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    border: '1px solid black',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    fontSize: '20px',
    width: '300px',
    height: '100px',  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};


  return <div style={divStyle}>rgb({props.r}, {props.g}, {props.b})</div>;
}

export default BoxColor;