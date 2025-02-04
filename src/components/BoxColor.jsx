function BoxColor(props) {
    const divStyle = {
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      color: "white",
      padding: "20px",
      textAlign: "center",
      border: "1px solid black",
      margin: "10px",
    };
  
    return (
      <div style={divStyle}>
        <p>rgb({props.r}, {props.g}, {props.b})</p>
      </div>
    );
  }
  
  export default BoxColor;