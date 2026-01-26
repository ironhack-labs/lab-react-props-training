export default function BoxColor(props) {
  let r = props.r;
  let g = props.g;
  let b = props.b;
  const divStyle = {
    backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
  };

  return (
    <div style={divStyle}>
      rbg({r}, {b}, {g})
    </div>
  );
}
