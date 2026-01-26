const BoxColor = ({ r, g, b }) => {
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: `${(r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000000' : '#ffffff'}`,
  };

  return (
    <div className="box-color" style={divStyle}>
      <p> rgb({r}, {g}, {b})</p>
      <p> {rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
