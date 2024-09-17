function BoxColor(props) {
  
  let hexa = ((props.r <<16) | (props.g  << 8) | props.b).toString(16).padStart(6, '0');
  
  let boxStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    padding: "10px 50px",
    width: "200px",
    margin: "10px",
    border: "solid 1px black",
  }

  return (
    <div style={boxStyles}>
        <p>rgb({props.r}, {props.g}, {props.b})</p>
        <p>#{hexa}</p>
    </div>
  )
}

export default BoxColor