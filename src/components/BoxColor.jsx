function BoxColor(props) {
  let rgb = `rgb(${props.r}, ${props.g}, ${props.b})`;
  let divStyle = {
    display: "flex",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    border: "5px solid black",
    backgroundColor: rgb,
  };
  return (
    <div style={divStyle}>
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

export default BoxColor;
