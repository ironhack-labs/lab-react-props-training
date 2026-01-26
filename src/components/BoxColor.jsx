function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid #000",
        padding: "50px",
        margin: "10px",
        background: `rgb(${r},${g},${b})`,
        color: "#fff",
        fontSize: "24px",
      }}
    >
      rgb({r},{g},{b})
    </div>
  );
}

export default BoxColor;
