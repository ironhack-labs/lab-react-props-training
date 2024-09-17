
function BoxColor(props) {
  // console.log(props)
  // let rgbColor = (props.r, props.g, props.b)

  return (
    <div className="card" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>rgb({props.r}, {props.g}, {props.b})</div>
  )
}

export default BoxColor