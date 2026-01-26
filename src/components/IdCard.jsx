function IdCard(props) {

  let birth = props.birth.toLocaleDateString();

  return (
    <div id="card">
      <img src={props.picture} alt="picture" />

      <div>
        <p>First name: <span>{props.firstName}</span></p>
        <p>Last name: <span>{props.lastName}</span></p>
        <p>Gender: <span>{props.gender}</span></p>
        <p>Height: <span>{props.height}m</span></p>
        <p>Birth: <span>{birth}</span></p>
      </div>
      
    </div>
  )
}

export default IdCard