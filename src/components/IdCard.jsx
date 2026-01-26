

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={picture} alt="person" />
      </div>
      <div className="info-container">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
