let BoxColor = (props) => {
  let divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    height: "200px",
    width: "600px",
  };
  return (
    <div className="boxColorContainer" style={divStyle}>
      <p>
        rgb(
        {props.r},{props.g},{props.b})
      </p>
    </div>
  );
};
export default BoxColor;
