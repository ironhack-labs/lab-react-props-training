function BoxColor(props) {
  const newColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    width: "300px",
    height: "150px",
    margin: "20px",
  };
  return <div style={newColor}></div>;
}
export default BoxColor;
