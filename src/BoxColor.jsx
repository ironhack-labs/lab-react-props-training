function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    padding: "20px",
    margin: "10px",
    border: "1px solid #000"
  };

  return (
    <div style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
