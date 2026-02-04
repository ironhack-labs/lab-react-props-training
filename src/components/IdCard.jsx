function IdCard(props) {
  return (
    <div className="infos-container">
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
    </div>
  );
}
export default IdCard;
