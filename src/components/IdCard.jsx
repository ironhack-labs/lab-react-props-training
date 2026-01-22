function IdCard(props) {

  return (
    <div className="card-container">
      <img src={props.picture} />
      <div className="card-info">
        <p>
          <span>First name:</span>
          {props.firstName}
        </p>

        <p>
          <span>Last name: </span>
          {props.lastName}
        </p>

        <p>
          <span>Gender: </span>
          {props.gender}
        </p>

        <p>
          <span>Height: </span>
          {props.height}
        </p>

        <p>
          <span>Birth: </span>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
