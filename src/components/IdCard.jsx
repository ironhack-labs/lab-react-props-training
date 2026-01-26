function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <>
      <div className="user-card">
        <div className="img">
          <img src={picture} alt="" />
        </div>
        <div ClassName="user-infos">
          <ul>
            <li>First name: {firstName}</li>
            <li>Last name: {lastName}</li>
            <li>Gender: {gender}</li>
            <li>Height: {height}</li>
            <li>Birth: {birth}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default IdCard;
