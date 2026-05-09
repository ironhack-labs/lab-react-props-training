import "./idCard.css";

function IdCard(prop) {
  return (
    <div className="id-cards">
      <img src={prop.picture} alt="profile" />
      <div className="card-data">
        <p>{prop.lastName}</p>
        <p>{prop.firstName}</p>
        <p>{prop.gender}</p>
        <p>{prop.height}</p>
        <p>{prop.birth.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
