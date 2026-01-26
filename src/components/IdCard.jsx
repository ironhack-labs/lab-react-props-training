function IdCard(props) {
  return (
    <div id="container">
      <img src={props.picture} alt="picture" class="picture"/>
      <div class ="text">
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard