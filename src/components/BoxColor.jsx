function BoxColor (props){

const cardStyles = {
  border: "black 2px solid",
  padding: "10px",
  margin: "10px",
   backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
}



    return (

        <div style={cardStyles} >
            rgb ({props.r},{props.g},{props.b})
        </div>

    )
}

export default BoxColor