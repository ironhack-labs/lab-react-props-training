function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idCard">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Height:</strong> {height} cm
      </p>
      <p>
        <strong>Birth:</strong> {birth.toDateString()}
      </p>
    </div>
  );
}

export default IdCard;
