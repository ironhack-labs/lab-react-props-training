
function BoxColor({ r, g, b }) {
  const color = `rgb(${r}, ${g}, ${b})`;

  // BONUS: convertir a hex
  const toHex = (n) => n.toString(16).padStart(2, "0");
  const hex = "#" + toHex(r) + toHex(g) + toHex(b);

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "20px",
        margin: "10px",
        border: "1px solid black",
        color: (r+g+b)/3 < 128 ? "white" : "black"
      }}
    >
      <p>{color}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;