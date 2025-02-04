export default function BoxColor({ r, g, b }) {
    const divStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: r + g + b > 382 ? "black" : "white", // Choose text color for contrast
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid black",
      fontSize: "20px",
    };
  
    return (
      <div style={divStyle}>
        rgb({r}, {g}, {b})
      </div>
    );
  }
  