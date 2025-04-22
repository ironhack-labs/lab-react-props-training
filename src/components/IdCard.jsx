const IdCard = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.picture} alt="" />
      </div>
      <div className="content">
        <p>
          <strong>First Name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
