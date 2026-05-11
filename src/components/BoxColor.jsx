function BoxColor({ r, g, b }) {
  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "100px",
    height: "100px",
    margin: "10px"
  };

  return (
    <div style={style}></div>
  );
}

export default BoxColor;