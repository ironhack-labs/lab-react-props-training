function BoxColor(props) {

  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: "10px"
  };

  return (
    <div style={boxStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;