function BoxColor(props){

  // Ensure that the values are within the valid range (0-255)
  let r = Math.max(0, Math.min(Number(props.r), 255));
  let g = Math.max(0, Math.min(Number(props.g), 255));
  let b = Math.max(0, Math.min(Number(props.b), 255));

  // Convert the decimal RGB values into hexadecimal format
  // Pad start gives a 0 to the left if there is only one character
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // Construct the hexadecimal color code by combining the individual RGB values
  const hexColor = `#${hexR}${hexG}${hexB}`;

    return (
        <div style={{background: `rgb(${props.r} ${props.g} ${props.b})`}}>
            <p>rgb({props.r} {props.g} {props.b})</p>
            <p>{hexColor}</p>
        </div>
    )
}

export default BoxColor