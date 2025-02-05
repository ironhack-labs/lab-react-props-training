function BoxColor({ r, g, b }) {
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      width: "300px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      color: "white",
      fontSize: "18px",
    };
  
    return (
      <div style={divStyle}>
        rgb({r}, {g}, {b})
      </div>
    );
  }
  
  export default BoxColor;