let IdCard = (props) => {
  return (
    <div className="cardContainer">
      <div className="infoContainer">
        <p>
          <b>First name:</b>
          {props.firstName}
        </p>
        <p>
          <b>Last name:</b>
          {props.lastName}
        </p>
        <p>
          <b>Gender:</b>
          {props.gender}
        </p>
        <p>
          <b>Height:</b>
          {props.height}cm
        </p>
        <p>
          <b>Birth:</b>
          {props.birth.toLocaleDateString()}
        </p>
      </div>
      <img src={props.picture} alt="userImage"></img>
    </div>
  );
};
export default IdCard;
