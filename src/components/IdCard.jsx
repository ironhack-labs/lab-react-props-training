function IdCard(props) {
  return (
    <div style={{ display: "flex" }}>
      <p ><img src={props.picture} alt={props.firstName} /></p>
      <ol >
        <li><strong>First name:</strong> {props.firstName}</li>
        <li><strong>Last name:</strong> {props.lastName}</li>
        <li><strong>Gender:</strong> {props.gender}</li>
        <li><strong>Height:</strong> {props.height / 100}m</li>
        <li><strong>Birth:</strong> {props.birth.toDateString()}</li>
      </ol>
    </div>
  );
}

export default IdCard