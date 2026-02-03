
function BoxColor(props) {
  const { r, g, b } = props;

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: "white",
    padding: "20px",
    margin: "10px 0",
    textAlign: "center",
    border: "1px solid black"
  };

  return (
    <div style={boxStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;