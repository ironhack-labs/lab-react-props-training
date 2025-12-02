function BoxColor(props) {
  const { r, g, b } = props;

  const bgColor = `rgb(${r}, ${g}, ${b})`;

  const boxStyle = {
    backgroundColor: bgColor,
    color: "black",
    padding: "20px",
    border: "1px solid #000",
    margin: "10px 0",
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif"
  };

  return (
    <div style={boxStyle}>
      <p>rgb({r}, {g}, {b})</p>
      <p>{bgColor}</p>
    </div>
  );
}

export default BoxColor;