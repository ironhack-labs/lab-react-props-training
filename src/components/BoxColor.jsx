
function BoxColor(props) {
  const color = `rgb(${props.r},${props.g},${props.b})`
    return (
    <div className="boxColor" style={{backgroundColor: color, width: "300px", height: "40px", border: "1px solid black", padding: "10px", margin: "10px"}}>
      <p>rgb({props.r},{props.g},{props.b})</p>
    </div>
  )
}

export default BoxColor
