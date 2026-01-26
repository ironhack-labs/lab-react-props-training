function IdCard(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="img-card">
          <img
            src={props.picture}
            alt={`${props.firstName} ${props.lastName}`}
          />
        </div>
        <div className="cards-all">
          <p><strong>First name:</strong> {props.firstName} </p>
          <p><strong>Last name:</strong> {props.lastName}</p>
          <p><strong>Gender:</strong> {props.gender}</p>
          <p><strong>Height</strong> {props.height}</p>
          <p><strong>Birth:</strong> {props.birth ? props.birth.toDateString() : "Unknown"}</p>
        </div>
      </div>
    </>
  );
}

export default IdCard;
