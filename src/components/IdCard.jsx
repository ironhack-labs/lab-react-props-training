import "./IdCard.css";

function IdCard(props) {
  return (
    <div className="IdCard">
      <p>
        <b>Last name:</b> {props.lastName}
      </p>
      <p>
        <b>First name:</b> {props.firstName}
      </p>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
      <p>
        <b>Height:</b> {props.height}
      </p>
      <p>
        <b>Birth:</b> {props.birth}
      </p>
      <p>
        <img src={props.imageSrc} alt="portrait" />
      </p>
    </div>
  );
}

export default IdCard;
