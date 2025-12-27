
function BoxColor(props) {

  return (
    <div className="contenedor" style={{backgroundColor:`rgb(${props.r},${props.g},${props.b})`}}>rgb({props.r},{props.g},{props.b})</div>
  )
}

export default BoxColor