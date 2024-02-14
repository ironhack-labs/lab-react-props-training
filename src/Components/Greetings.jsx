function Greetings(props) {
  
  const greetingsStyles = {
    marginLeft: "50px",
    marginTop: "20px",
    border: "1px solid black",
    paddingLeft: "5px",
  }

    return (
    <div style={greetingsStyles}>
        <p>{props.children}</p>
    </div>
  )
}

export default Greetings