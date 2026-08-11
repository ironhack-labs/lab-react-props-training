function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card">
      <img src={picture} />
      <div>
        <p>
          <span className="user-details-label">First name: </span>
          <span>{firstName}</span>
        </p>
        <p>
          <span className="user-details-label">Last name: </span>
          <span>{lastName}</span>
        </p>
        <p>
          <span className="user-details-label">Gender: </span>
          <span>{gender}</span>
        </p>
        <p>
          <span className="user-details-label">Height: </span>
          <span>{height}</span>
        </p>
        <p>
          <span className="user-details-label">Birth: </span>
          <span>{birth.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

export default IdCard;
