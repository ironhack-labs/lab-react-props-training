function IdCard(props) {
  // let imgPerson  = {props.picture}
  // console.log(props);
  return (
    <div className="card">
      {/* style={{ border: "3px solid black" }} */}
      <img src={props.picture}></img>

      <div className="text">
        <span><strong>First name:</strong> {props.firstName}</span>
        <span><strong>Last name:</strong> {props.lastName}</span>
        <span><strong>Gender:</strong> {props.gender}</span>
        <span><strong>Height:</strong> {props.height}</span>
        <span><strong>Birth:</strong> {props.birth.toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default IdCard;
