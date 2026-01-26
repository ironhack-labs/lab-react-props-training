function IdCard(props) {
  let styles = {
    display: "flex",
    border: "solid 1px black",
    
    margin: "10px",
  
  }
  let stylesP = {
    display: "flex",
    flexDirection: "column",
    fontSize: ".8rem",
  }
  return (
    <div style={styles}>
        <img src={props.picture} alt="" style={{"height":"100px", margin:"5px"}}/>
        <div style={stylesP}>
            <p style={{margin:"0", padding:'0'}}><b>First name:</b> {props.firstName}</p>
            <p><b>Last name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birth:</b> {props.birth.toDateString()}</p>
        </div>
    </div>
  )
}

export default IdCard