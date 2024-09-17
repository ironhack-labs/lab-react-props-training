function IdCard(props) {
  return (
    <div className="contenedor">
      <img src={props.picture} alt="ID pic" />
      <ul>
        <li>First name: {props.firstName}</li>
        <li>Last name: {props.lastName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birth: {props.birth.toLocaleDateString}</li>
      </ul>
    </div>
  );
}

export default IdCard;
