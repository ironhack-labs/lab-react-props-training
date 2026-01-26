import "./IdCard.css";

function IdCard(props) {
  return (
    <div id="id-card-container">
      <div id="data">
        <p> First Name: {props.firstName}</p>
        <p> Last Name: {props.lastName}</p>
        <p> Gender: {props.gender}</p>
        <p> Height:{props.height}m </p>
        <p> Birth:{props.birth.toDateString()} </p>
      </div>
      <div id="perfil-picture">
        <img src={props.picture} />
      </div>
    </div>
  );
}

export default IdCard;
