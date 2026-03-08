function BoxColor(props) {
  const style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    padding: "20px",
    margin: "10px",
  };

  return (
    <div style={style}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
