function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "300px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    padding: '20px',
    margin: '10px',
    color: 'white',
  };

  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;