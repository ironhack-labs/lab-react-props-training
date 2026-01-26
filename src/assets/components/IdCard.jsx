function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <>
      <div className="id-card card">
        <div>
          <img src={picture} alt="Profile Picture" />
        </div>
        <div className="profile-information">
          <p>
            <b>First name</b>: {firstName}
          </p>
          <p>
            <b>Last Name</b>: {lastName}
          </p>
          <p>
            <b>Gender</b>: {gender}
          </p>
          <p>
            <b>Height</b>: {height}
          </p>
          <p>
            <b>Birth</b>: {birth.toDateString()}
          </p>
        </div>
      </div>
    </>
  );
}

export default IdCard;
