function BoxColor(props) {
  const { r, g, b } = props;
  const stringColor = `rgb(${r},${g},${b})`;

  const rgbToHex = (r, g, b) =>
    `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;

  return (
    <div
      className="block-color"
      style={{
        backgroundColor: stringColor,
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        color: "white",
        border: "1px solid black",
      }}
    >
      <strong>{rgbToHex(r, g, b)}</strong>
      <br />
      <strong>{stringColor}</strong> <br />
    </div>
  );
}

export default BoxColor;
