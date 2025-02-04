function BoxColor(props) {
    const divStyle = {
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    };
  
    return (
      <div className="box" style={divStyle}>
        rgb({props.r}, {props.g}, {props.b})
      </div>
    );
  }
  
  export default BoxColor;
  