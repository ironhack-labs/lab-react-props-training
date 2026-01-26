import "./IdCard.css";

function IdCard(props) {
  return (
    <div className="id-card">
      <img className="id-card-image" src={props.picture}></img>
      <div className="id-card-content">
        <p>
          <strong>Last Name :</strong> {props.lastName}
        </p>
        <p>
          <strong>First Name: </strong> {props.firstName}
        </p>
        <p>
          {" "}
          <strong>Gender: </strong> {props.gender}
        </p>
        <p>
          {" "}
          <strong>Height: </strong> {props.height}
        </p>
        <p>
          {" "}
          <strong>Birth: </strong> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
