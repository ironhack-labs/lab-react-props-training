function BoxColor(props) {
  const r = props.r;
  const g = props.g;
  const b = props.b;

  const divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` };

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  return (
    <div className="text-card" style={divStyle}>
      <h1>{`rgb(${r}, ${g}, ${b})`}</h1>
      <h1>{`Hex ${rgbToHex(r, g, b)}`}</h1>
    </div>
  );
}

export default BoxColor;

