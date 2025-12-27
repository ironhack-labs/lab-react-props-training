const BoxColor = (props) => {
  const boxStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    color: "white",
    width: "auto",
    margin: "4px",
    height: "auto",
    border: "2px solid black",
  };
  return (
    <h1 id="boxColor">
      <div style={boxStyle}>
        rgb({props.r},{props.g},{props.b})
      </div>
    </h1>
  );
};

export default BoxColor;
