import "./IdCard.css";

function IdCard(props) {
  return (
    <article className="id-card">
      <img src={props.picture} alt="photo" />
      <div>
        <p>
          <strong>First name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth.toLocaleDateString("en-EN")}
        </p>
      </div>
    </article>
  );
}

export default IdCard;
