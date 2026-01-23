function BoxColor(){
    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '200px',
        height: '100px',
        border: '1px solid black',
        margin: '20px',
        textAlign: 'center',
        lineHeight: '100px',
        color: 'white',
      };

return (
    <div style={boxStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;