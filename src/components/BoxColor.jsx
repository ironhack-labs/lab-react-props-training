export default function Random({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };
  const rgbToHex = [255, 0, 0]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
  return (
    <div style={divStyle}>
      rgb({r},{g},{b})
      <br /> #{rgbToHex}
    </div>
  );
}
