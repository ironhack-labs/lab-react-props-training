function IdCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={props.picture} alt={props.firstName} />
      <div>
        <p><strong>First Name:</strong> {props.firstName}</p>
        <p><strong>Last Name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}cm</p>
        <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
