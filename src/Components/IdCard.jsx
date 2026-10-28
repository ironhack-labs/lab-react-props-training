function IdCard(props) {
  return (
    <div className="idCard">
      <p><b>lastName:</b> {props.lastName}</p>
      <p><b>firstName:</b> {props.firstName}</p>
      <p><b>gender:</b> {props.gender}</p>
      <p><b>height:</b> {props.height}</p>
      <p><b>birth:</b> {props.date}</p>
      <p>
   
  <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
</p>
    </div>
  );
}

export default IdCard;