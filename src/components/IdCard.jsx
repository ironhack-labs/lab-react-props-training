const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <li className="idCard">
      <img className="idCard__picture" src={picture} alt={firstName} />
      <div className="idCard__info">
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toDateString()}
        </p>
      </div>
    </li>
  );
};

export default IdCard;
