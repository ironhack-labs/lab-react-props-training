function BoxColor({ r, g, b }) {
  function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  let rgbToHex =
    "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

  return (
    <div
      className="card box-color"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex}</p>
    </div>
  );
}

export default BoxColor;
