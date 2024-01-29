export default function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    outline: "2px solid #000000",
    padding: "10px 20px 10px 20px",
  };
  return (
    <div style={divStyle}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}
