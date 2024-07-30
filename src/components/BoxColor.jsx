function BoxColor({ r, g, b, hex }) {
  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    border: "1px solid black",
    margin: "2px",
    width: "75%",
  };

  const colorStyle = {
    display: "flex",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  };

  return (
    <div style={boxStyle}>
      <p style={colorStyle}>
        RGB: ({r}, {g}, {b} | Hex: {hex})
      </p>
    </div>
  );
}

export default BoxColor;
