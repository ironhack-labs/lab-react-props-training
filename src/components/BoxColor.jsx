import "./BoxColor.css";
function BoxColor(props) {
  return (
    <div
      className="color"
      style={{
        background: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    >
      <p className="style-color">
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
