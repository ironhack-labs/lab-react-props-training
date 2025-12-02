function BoxColor({ r, g, b }) {
    const divStyle = {
      backgroundColor: `rgb(${r},${g},${b})`,
      padding: "20px",
      margin: "10px",
      textAlign: "center",
      border: "1px solid black",
      color: r + g + b > 382 ? "black" : "white"
    };
  
    const toHex = (x) => x.toString(16).padStart(2, "0");
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
    return (
      <div style={divStyle}>
        rgb({r},{g},{b}) <br />
        {hex}
      </div>
    );
  }
  
  export default BoxColor;
  