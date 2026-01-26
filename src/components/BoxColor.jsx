function BoxColor(props) {
  const rgbToHexa = () => {
    return `#${((1 << 24) | (props.r << 16) | (props.g << 8) | props.b)
      .toString(16)
      .slice(1)}`;
  };
  return (
    <div
      className="card"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      <h3>
        rgb({props.r},{props.g},{props.b})
      </h3>
      <h3>{rgbToHexa()}</h3>
    </div>
  );
}
export default BoxColor;
