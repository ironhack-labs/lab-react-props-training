export default function BoxColor(props) {
  const boxColor = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  };

  return <div style={boxColor}>{`rgb(${props.r},${props.g},${props.b})`} </div>;
}
