function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const birthStr = birth.toDateString();

  return (
    <article className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {(height / 100).toFixed(2)}m</p>
        <p><strong>Birth:</strong> {birthStr}</p>
      </div>
    </article>
  );
}

export default IdCard;
