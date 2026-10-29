
function IdCard(props) {
  return (
    <div>
      <img src={props.picture} alt="Profile" width="100" />
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height} cm</p>
      <p>Birth: {props.birth.toLocaleDateString()}</p>
    </div>
  );
}

export default IdCard;
