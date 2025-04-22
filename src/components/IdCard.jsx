function IdCard(props) {
  return (
    <div className="idcard-container">
      <div className="id-text">
        <p>
          <b>First name:</b> {props.lastName}
        </p>
        <p>
          <b>firstName:</b> {props.firstName}
        </p>
        <p>
          <b>gender:</b> {props.gender}
        </p>
        <p>
          <b>height:</b> {props.height}
        </p>
        <p>
          <b>birth:</b> {props.birth}
        </p>
      </div>
      <img src={props.picture} alt={`picture of ${props.firstName} ${props.lastName}`} />
    </div>
  );
}
export default IdCard;
