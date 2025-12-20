function IdCard(props) {
  const person = props;

  console.log(props);

  return (
    <>
      <div className="card">

        <div className="image">
          <img src={person.picture} alt="Profile" />
        </div>

        <div className="card-info">
          <p>
            <span>First Name:</span>
            {person.firstName}
          </p>
          <p>
            <span>Last Name:</span>
            {person.lastName}
          </p>
          <p>
            <span>Gender:</span>
            {person.male}
          </p>
          <p>
            <span>Height:</span>
            {person.height}
          </p>
          <p>
            <span>Birth:</span>
            {person.birth.toDateString()}
          </p>
        </div>
      </div>
    </>
  );
}
export default IdCard;
