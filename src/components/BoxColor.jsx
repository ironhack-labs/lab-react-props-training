import "./Boxcolor.css";

const BoxColor = (props) => {
  let divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <div className="BoxColor" style={divStyle}>
      RGB: {props.r}, {props.g}, {props.b}
    </div>
  );
};
export default BoxColor;
