import "./IdCard.css";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />

      <div className="id-card-info">
        <div>
          <strong>First name:</strong> {firstName}
        </div>

        <div>
          <strong>Last name:</strong> {lastName}
        </div>

        <div>
          <strong>Gender:</strong> {gender}
        </div>

        <div>
          <strong>Height:</strong> {height / 100}m
        </div>

        <div>
          <strong>Birth:</strong> {birth.toDateString()}
        </div>
      </div>
    </div>
  );
}

export default IdCard;