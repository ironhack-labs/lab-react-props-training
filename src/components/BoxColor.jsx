

function BoxColor(props) {
  return (
    <div className="container" style={{background: "rgb("+props.r+","+props.g+","+props.b+")",justifyContent:"center"}}>        
        rgb({props.r},{props.g},{props.b})
    </div>
  )
}

export default BoxColor