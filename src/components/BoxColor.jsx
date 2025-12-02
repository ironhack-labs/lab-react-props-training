function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r}, ${g}, ${b})`;

  const toHex = (v) => v.toString(16).padStart(2, "0");
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div
      style={{
        backgroundColor: rgb,
        color: r + g + b > 382 ? "black" : "white",
        padding: "20px",
        margin: "10px 0",
        border: "2px solid black",
        textAlign: "center",
      }}
    >
      <p>{rgb}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
