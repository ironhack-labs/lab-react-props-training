function IdCard(props) {

    const divStyle={
        display: "flex",
        alignContent: "column",
        marginLeft: "50px",
        marginTop: "50px",
        marginBottom: "50px",
        border: "1px solid black",
        padding: "5px",
        lineHeight: "8px"
    }

  return (

    
    <div style={divStyle}>
        
        <img src={props.picture} width="200px" />
        <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height/100}m</p>
        <p>Birth: {props.birth.toDateString()}</p>
        </div>
    </div>
  )
}

export default IdCard