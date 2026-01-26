export default function BoxColor(props) {
  const { r, g, b } = props;

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  const textColor = r > g ? "white" : "black";
  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        color: `${textColor}`,
      }}
    >
      rgb({r},{g},{b}) <br /> {rgbToHex(r, g, b)}
    </div>
  );
}
