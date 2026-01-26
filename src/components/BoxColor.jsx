
function BoxColor(props) {

  return (

    <>
    <div className="box-color" style={{background: `rgb(${props.r}, ${props.g}, ${props.b})`, color: "white"}}>
        <p>rgb ({props.r}, {props.g}, {props.b})</p>
        </div>

    </>
  )
}

export default BoxColor