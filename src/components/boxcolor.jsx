function BoxColor({ r, g, b }) {
  const rgbColor = `rgb(${r},${g},${b})`;

  const toHex = (value) => {
    return value.toString(16).padStart(2, "0");
  };

  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div
      style={{
        backgroundColor: rgbColor,
        border: "2px solid black",
        padding: "40px",
        marginBottom: "18px",
        textAlign: "center",
        fontSize: "28px"
      }}
    >
      <div>{rgbColor}</div>
      <div>{hexColor}</div>
    </div>
  );
}

export default BoxColor;