function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div style={{ border: "1px solid black",
         margin: "10px",
         padding: "10px",
         display: "flex",
         gap: "10px" }}>
      <img src={picture} alt={firstName} />
      <div>
        <p><b>First name:</b> {firstName}</p>
        <p><b>Last name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {height}cm</p>
        <p><b>Birth:</b> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
