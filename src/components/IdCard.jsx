function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} alt={props.firstName + " " + props.lastName} />
      <ul>
        <li>
          <strong>First name:</strong> {props.firstName}
        </li>
        <li>
          <strong>Last name:</strong> {props.lastName}
        </li>
        <li>
          <strong>Gender:</strong> {props.gender}
        </li>
        <li>
          <strong>Height:</strong> {props.height}m
        </li>
        <li>
          <strong>Birth:</strong> {props.birth.toLocaleDateString()}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
