function BoxColor(props) {
  const { r, g, b } = props;
  
  // Function to convert RGB to HEX
  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  
  const hexColor = rgbToHex(r, g, b);
  
  // Determine text color based on background brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = brightness > 128 ? 'black' : 'white';
  
  return (
    <div className="box-color" style={{ 
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: textColor
        }}>
      <p>rgb({r},{g},{b})</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;