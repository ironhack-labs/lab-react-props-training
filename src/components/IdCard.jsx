const idCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <div className="card">
      <div className="portrait">
        <img src={picture} alt="profile picture" />
      </div>
      <div className="info">
        <p>
          <span className="bold">First name:</span> {firstName}
        </p>
        <p>
          <span className="bold">Last name:</span> {lastName}
        </p>
        <p>
          <span className="bold">Gender:</span> {gender}
        </p>
        <p>
          <span className="bold">Height:</span> {height / 100}m
        </p>
        <p>
          <span className="bold">Birth:</span> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default idCard;
