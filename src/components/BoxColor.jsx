const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    width: "300px",
    height: "50px",
    textAlign: "center",
  };
  const rgbToHex = (r, g, b) => {
    return (
      "#" +
      r.toString(16).padStart(2, "0") +
      g.toString(16).padStart(2, "0") +
      b.toString(16).padStart(2, "0")
    );
  };

  return (
    <>
      <div style={boxStyle}>
        rgb({r},{g},{b})<br />
        {rgbToHex(r, g, b)}
      </div>
    </>
  );
};

export default BoxColor;
