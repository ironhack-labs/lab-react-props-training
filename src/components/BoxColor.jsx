
function BoxColor({ r, g, b }) {

  const colorRgb = `rgb(${r}, ${g}, ${b})`;
  
  const boxStyle = {
    backgroundColor: colorRgb,
    width: '80%',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black', 
    border: '1px solid black',
    margin: '10px 0',
    fontWeight: 'bold'
  };

  return (
    <div style={boxStyle}>
      <span>rgb({r}, {g}, {b})</span>
    </div>
  );
}

export default BoxColor;