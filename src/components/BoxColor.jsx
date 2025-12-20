function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    height: "150px",
    border: "1px solid black",
    textAlign: "center",
    margin: "10px",
    fontSize: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white",
  };

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  return (
    <div style={divStyle}>
      {" "}
      rgb({r},{g},{b}) <br />#{hexR}
      {hexG}
      {hexB}{" "}
    </div>
  );
}
export default BoxColor;
