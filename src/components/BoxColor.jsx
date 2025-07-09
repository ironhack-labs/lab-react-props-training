function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    padding: '20px',
    color: 'black',
    border: '1px solid black',
    margin: '10px 0',
    textAlign: 'center',
  };

  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
