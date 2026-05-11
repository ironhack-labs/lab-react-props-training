function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div style={{ display: "flex", border: "1px solid black", marginBottom: "10px", padding: "10px" }}>
      <img src={picture} alt={`${firstName} ${lastName}`} style={{ width: "150px", marginRight: "20px" }} />
      <div>
        <p><strong>First name</strong>: {firstName}</p>
        <p><strong>Last name</strong>: {lastName}</p>
        <p><strong>Gender</strong>: {gender}</p>
        <p><strong>Height</strong>: {height / 100}m</p>
        <p><strong>Birth</strong>: {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;