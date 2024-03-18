import "./BoxColor.css";
const BoxColor = (props) => {
  const colorInput = `${props.r},${props.g},${props.b}`;
  const boxStyle = {
    backgroundColor: `rgb(${colorInput})`,
  };
  return (
    <div className="BoxColor" style={boxStyle}>
      <p>rgb({colorInput})</p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default BoxColor;
