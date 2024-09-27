export default function Random({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };
  const rgbToHex = [r, g, b]
    .map((rgbPart) => {
      const hex = rgbPart.toString(16);
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
