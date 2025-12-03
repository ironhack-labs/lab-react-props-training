function IdCard({ lastName, firstName, gender, height, birth, picture }){

  return (
    <div className="IdCard d-flex border m-1">
      <img className="img-thumbnail" src={picture} alt={`${firstName}_${lastName}`} />
      <p className="ms-3">
        <strong>First name:</strong> {firstName}<br />
        <strong>Last name:</strong> {lastName}<br />
        <strong>Gender:</strong> {gender}<br />
        <strong>Height:</strong> {`${height / 100}m`}<br />
        <strong>Birth:</strong> {birth.toDateString()}<br />
      </p>
    </div>
  );
}

export default IdCard;