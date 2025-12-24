function BoxColor(props) {
  // console.log(props)
  // let rgbColor = (props.r, props.g, props.b)
  function toHex(num) {
    let hex = num.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }

  let hexColor = `#${toHex(props.r)}${toHex(props.g)}${toHex(props.b)}`

  return (
    <div
      className="card colors"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;
