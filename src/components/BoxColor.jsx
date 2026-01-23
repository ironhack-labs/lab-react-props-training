function BoxColor(props) {
  const rectangleStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    padding: 10,
    width: 400,
    margin: 20,
  };

  return (
    <div style={rectangleStyle}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}

export default BoxColor;
