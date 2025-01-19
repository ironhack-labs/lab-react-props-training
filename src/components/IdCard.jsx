function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  const birthDate = new Date(birth); // transforming the date of birth (string) into a date object
  return (
    <div className="IdCard">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p>
          <b>First Name:</b> {firstName}
        </p>
        <p>
          <b>Last Name:</b> {lastName}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
        <p>
          <b>Height:</b> {height}cm
        </p>
        <p>
          <b>Birth:</b> {birthDate.toDateString()}{" "}
          {/* converting the date into a readable string */}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
