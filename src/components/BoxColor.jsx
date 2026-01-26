function BoxColor (props) {
    const rgbValue = `rgb(${props.r}, ${props.g}, ${props.b})`;
    const hexValue = `#${(1 << 24 | props.r << 16 | props.g << 8 | props.b).toString(16).slice(1)}`;

    const boxStyle = {
        backgroundColor: rgbValue,
        width: '300px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #000',
        margin: '10px',
    };

  return (
    <div style={boxStyle}>
    <p>{rgbValue}</p>
    <p>{hexValue}</p>
  </div>
);
  
}

export default BoxColor;
