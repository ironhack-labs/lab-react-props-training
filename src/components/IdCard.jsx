function IdCard(props){
    return (
      <>
          <p>First Name: {props.firstName}</p>
          <p>Last Name: {props.lastName}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Birth: {" "}
            {props.birth instanceof Date
              ? props.birth.toDateString() 
            : "Invalid Date"}
          </p>
          <img src={props.picture} alt={props.firstName} />
      </>
  )
  }

export default IdCard;