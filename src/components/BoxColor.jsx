const BoxColor = (props) => {
    const { r, g, b } = props;
    const rgbToHex = (r, g, b) => {
      const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const boxStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      padding: '10px',
      margin: '10px',
      color: 'white', 
    };
  
    return (
      <div style={boxStyle}>
        RGB: ({r}, {g}, {b}) <br />
        Hex: {rgbToHex(r, g, b)}
      </div>
    );
  };
  
  export default BoxColor;