function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <article className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Birth:</strong> {birth.toLocaleDateString()}</p>
      </div>
    </article>
  );
}

export default IdCard;
