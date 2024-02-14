function Random(props) {

  const randomStyles= {
    marginLeft: "50px",
    marginTop: "20px",
    border: "1px solid black",
    padding: "5px",
  }
    return (
      <div style={randomStyles}>
          Random value between {props.min} and {props.max} - {Math.floor(Math.random()*(props.max - props.min +1)+ props.min)}
      </div>
    )
  }
  
  export default Random