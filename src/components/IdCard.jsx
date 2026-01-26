function IdCard(props) {
  console.log(props)
  return (
    <div className="container">
      <img src={props.picture} alt="Image" />
      <ul>
        <li><span>First name: </span>{props.firstName}</li>
        <li><span>Last name: </span>{props.lastName}</li>
        <li><span>Gender: </span>{props.gender}</li>
        <li><span>Height: </span>{props.height}</li>
        <li><span>Birth: </span>{props.birth.toDateString()}</li>
      </ul>
    </div>
  )
}

export default IdCard