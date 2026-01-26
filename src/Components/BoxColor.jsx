function BoxColor(props) {

        
  
    return (
    <div 
    className= "boxColorStyles"
    style= {{backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`}}>

        <span style={{color: "white"}}>rgb({props.r},{props.g},{props.b})</span>

    </div>
  )
}

export default BoxColor