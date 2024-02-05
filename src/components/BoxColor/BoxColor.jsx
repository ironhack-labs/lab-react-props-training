// ? styles
import "./BoxColor.css";

export default function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
  };

  function _toHex(v) {
    return v.toString(16).padStart(2, "0");
  }

  const hexColor = `#${_toHex(r)}${_toHex(g)}${_toHex(b)}`;

  return (
    <div className="box-color" style={divStyle}>
      <span>
        rgb({r},{g},{b})
      </span>
      <span>{hexColor}</span>
    </div>
  );
}
