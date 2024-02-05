import "./BoxColor.css";

function rgbToHex(r, g, b) {
  // Input validation: Clamp values between 0 and 255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert each component to a hexadecimal string and format correctly
  const toHex = (x) => x.toString(16).padStart(2, "0");

  // Concatenate the hexadecimal strings
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

const BoxColor = ({ r, g, b }) => {
  return (
    <div
      className="boxColor"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      rgb({r},{g},{b})
      <br />
      #{rgbToHex(r,g,b)}
    </div>
  );
};

export default BoxColor;
