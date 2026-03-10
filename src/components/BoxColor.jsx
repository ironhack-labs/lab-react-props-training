function BoxColor(props) {
  const hexColor =
    '#' +
    props.r.toString(16).padStart(2, '0') +
    props.g.toString(16).padStart(2, '0') +
    props.b.toString(16).padStart(2, '0');

  const textColor = props.r + props.g + props.b < 382 ? 'white' : 'black';

  return (
    <div
      className="box-color"
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color: textColor,
      }}
    >
      <p>rgb({props.r},{props.g},{props.b})</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;