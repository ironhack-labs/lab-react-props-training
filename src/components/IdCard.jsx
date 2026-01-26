function IdCard(props) {
  return (
    <div className="IdCard card" style={{ width: "15rem" }}>
      <div>
        <img src={props.picture} className="card-img-top" alt="" />
      </div>
      <div className="card-body">
        <p>FirstName: {props.firstName}</p>
        <p>LastName: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
