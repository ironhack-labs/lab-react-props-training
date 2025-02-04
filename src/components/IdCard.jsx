function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} alt="profile" />
      <div className="id-card-text">
        <p><b>Last name:</b> {props.lastName}</p>
        <p><b>First name:</b> {props.firstName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height}</p>
        <p><b>Birth:</b> {props.birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;