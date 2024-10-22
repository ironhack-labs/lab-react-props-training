const BoxColor = (props) => {
  const rgbColor = `rgb(${props.r}, ${props.g}, ${props.b})`;

  const boxStyle = {
    border: "1px solid black",
    backgroundColor: rgbColor,
  };
  return <div style={boxStyle}>{rgbColor}</div>;
};

export default BoxColor;
