function BoxColor({ r, g, b }) {
    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '100px',
        height: '100px', 
        margin: '10px', 
      };
    return (
      <div className="input-color">
        <div className="color-box" style={boxStyle}></div>
      </div>
    );
  }
  
  export default BoxColor;