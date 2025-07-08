function BoxColor(props) {
  const divStyle = {
    color: "black",
    background: `rgb(${props.r},${props.g}, ${props.b})`,
    textAlign: "center",
    padding: "25px",
    marginBottom: "10px",
  };

  const rgbToHex = (r, g, b) => {
    return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
  };

  return (
    <div className="greeting-card" style={divStyle}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>#{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
}

export default BoxColor;
